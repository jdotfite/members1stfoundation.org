import dynamic from 'next/dynamic';
import camelcaseKeys from 'camelcase-keys';
import Preloader from '@/components/preloader';
import MissingSection from './missing-section';

const sectionsComponentPaths = {
  hero: dynamic(
    () => import('@/components/landing-page-sections/hero').catch(() => MissingSection),
    { loading: Preloader }
  ),
  two_column_with_image: dynamic(
    () => import('@/components/landing-page-sections/two-column-with-image').catch(() => MissingSection),
    { loading: Preloader }
  ),
  features: dynamic(
    () => import('@/components/landing-page-sections/features').catch(() => MissingSection),
    { loading: Preloader }
  ),
  testimonials: dynamic(
    () => import('@/components/landing-page-sections/testimonials').catch(() => MissingSection),
    { loading: Preloader }
  ),
  'icons-swiper': dynamic(
    () => import('@/components/landing-page-sections/icons-swiper').catch(() => MissingSection),
    { loading: Preloader }
  ),
  'rolling-stats': dynamic(
    () => import('@/components/landing-page-sections/rolling-stats').catch(() => MissingSection),
    { loading: Preloader }
  ),
  'cards-swiper': dynamic(
    () => import('@/components/landing-page-sections/cards-swiper').catch(() => MissingSection),
    { loading: Preloader }
  ),
};

export default function LandingPageSection({ type, sectionData }) {
	console.log('LandingPageSection - type:', type);
	console.log('LandingPageSection - sectionData:', sectionData);
  
	const SectionComponent = sectionsComponentPaths[type] || MissingSection;
  
	if (SectionComponent === MissingSection) {
	  console.log('Missing section for type:', type);
	}
  
	let props;
	if (type === 'hero') {
	  const { section_id, ...rest } = sectionData;
	  props = { ...camelcaseKeys(rest), section_id };
	} else {
	  props = sectionData;
	}
  
	console.log('Props being passed to component:', props);
  
	return <SectionComponent {...props} />;
  }