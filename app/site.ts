/**
 * Single source of truth for anything that changes when the app ships or the
 * domain moves. Nothing else in the site should hardcode a URL or an address.
 */

export const site = {
  name: 'Homey',
  tagline: 'Buy, sell and rent property in Malta — direct with the person who listed it.',

  /** Canonical origin for sitemap, robots and Open Graph. */
  url: 'https://www.homeyappmlt.com',

  email: 'heyhomeymlt@gmail.com',
  legalEmail: 'heyhomeymlt@gmail.com',

  /**
   * The app is not live in either store yet (Play Console loaded but not
   * submitted; App Store Connect pending reviewer details). Set `live: true`
   * and fill in `url` once each listing is published — the store buttons
   * switch from "coming soon" to real links on their own.
   */
  stores: {
    android: {
      live: false,
      // Predictable once published, from app.config.js `android.package`.
      url: 'https://play.google.com/store/apps/details?id=com.maltainmo.homey',
    },
    ios: {
      live: false,
      // Needs the numeric App Store id, available after the listing goes live.
      url: '',
    },
  },
} as const;

export const notifyMailto =
  `mailto:${site.email}` +
  '?subject=' +
  encodeURIComponent('Tell me when Homey launches') +
  '&body=' +
  encodeURIComponent(
    "Hi — I'd like to know when Homey is available to download.\n\n" +
      "I'm interested in: (renting / buying / listing a property)\n" +
      'Locality: \n'
  );

export const anyStoreLive = site.stores.android.live || site.stores.ios.live;
