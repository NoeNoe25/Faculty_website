// Site-wide links and contact details shared by several components.
export const ADMISSION_URL = 'https://admission.reg.kmitl.ac.th/#/';
export const NEWS_URL =
  'http://www.cmit.kmitl.ac.th/%E0%B8%81%E0%B8%B4%E0%B8%88%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%A7%E0%B8%B4%E0%B8%97%E0%B8%A2%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2%E0%B8%99%E0%B8%B2%E0%B9%82%E0%B8%99/';

// Same accounts as listed on the Contact page.
export const SOCIAL_LINKS = [
  { id: 'facebook', label: 'Facebook', url: 'https://facebook.com/kmitlofficial' },
  { id: 'twitter', label: 'Twitter', url: 'https://twitter.com/kmitl' },
  { id: 'youtube', label: 'YouTube', url: 'https://youtube.com/c/KMITLChannel' },
  { id: 'linkedin', label: 'LinkedIn', url: 'https://linkedin.com/school/kmitl' },
];

/** True for links that leave the single-page app (http(s), mailto, tel). */
export const isExternalLink = (href) => /^(https?:|mailto:|tel:)/i.test(href);
