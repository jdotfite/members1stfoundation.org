import Head from 'next/head';
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import camelcaseKeys from 'camelcase-keys';
import { getLandingPage, getLandingPages } from '@/lib/api';
import LandingPageSection from '@/components/landing-page-sections/landing-page-section';
import Preloader from '@/components/preloader';

export default function LandingPage({ page }) {
  const router = useRouter();
  if (router.isFallback) {
    return <Preloader />;
  }

  if (!page) {
    return <ErrorPage statusCode={404} />;
  }

  console.log('Page data:', page);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <title>{page.fields.seo.title}</title>
        <meta name="description" content={page.fields.seo.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" type="image/x-icon" href="https://buttercms.com/static/v2/images/favicon.png" />
      </Head>

      {page.fields.body.map(({ type, fields }, index) => (
        <LandingPageSection
          key={index}
          type={type}
          sectionData={fields}
        />
      ))}
    </>
  );
}

export async function getStaticProps({ params }) {
  try {
    const page = await getLandingPage(params.slug);

    console.log('Fetched page data:', page);

    return { 
      props: { 
        page: camelcaseKeys(page)
      },
      revalidate: 60 // Added ISR with a 60 second revalidation period
    };
  } catch (e) {
    console.error(`Couldn't load content for Landing page ${params.slug}.`, e);

    return {
      notFound: true
    };
  }
}

export async function getStaticPaths() {
  const butterToken = process.env.NEXT_PUBLIC_BUTTER_CMS_API_KEY;

  if (butterToken) {
    try {
      const landingPages = await getLandingPages();

      return {
        paths: landingPages.map((page) => `/landing-page/${page.slug}`),
        fallback: true,
      };
    } catch (e) {
      console.error("Couldn't load content for Landing pages.", e);
    }
  }

  return {
    paths: [],
    fallback: false,
  };
}