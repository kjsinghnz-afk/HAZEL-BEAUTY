import { Service, Testimonial } from './types';

export const SERVICES: Service[] = [
  {
    id: 'bb-glow',
    title: 'BB Glow Treatment',
    description: 'Achieve a semi-permanent foundation effect with our signature BB Glow. This treatment evens out skin tone, reduces redness, and provides a natural, radiant glow that lasts.',
    price: '$180',
    duration: '75 mins',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuChjrf_bbE2gy9KLodR-Zp0-5VoSM8UFmQW8HAkr9E2_SUbhgx135066lDXGFCS101xUscTZg9Oyp4de3V4DgbAlQUHvEWaODkiVzY2oBoDsPwHQTlY5vjhWV9EFtGeK2B2JfmnqnBaOG4dNp2-jfkVmNAUElQ6aMvRAzxbavOXRLbpYWjeo9PveAECWWUwNIEAufGubDi6edw9IjaaeYDoCIyunnpErfjw34uB0XPGcn5zdL9qtwZweyy9K0eRvo-45FUcC-I9838'
  },
  {
    id: 'herbal-facial',
    title: 'Herbal Infusion Facial',
    description: 'A deeply nourishing treatment using organic botanical extracts tailored to your skin type. Perfect for detoxification and restoring natural moisture balance.',
    price: '$145',
    duration: '60 mins',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDYZUiLei6hgZdr7iGA4SpWF6rk8Vqz7vVrdzFrpKyDHARUCSo7UnfVUVhx7YrOGkfl1l9z9pywss8pYpwCD07GHT6heL-4UCONZsbOpHYnVDc4W64hjGEVjp8gMN2cjCTi9vzXWwr1b4VRogV9vMVkgtmn2TGNrbRxBwl2FqVl57Y0WZ6rUQepfCtsebBZY9GWxzXqYJ8icxNTpoHhe6GsW77t6yGYWjWGz8fOCOC4oqxImwotcqczFAoYZVJEsAQVU_GcQaIyyDs'
  },
  {
    id: 'signature-glow',
    title: 'Signature Facial Glow',
    description: 'Our most popular treatment combining advanced exfoliation with deep hydration. Designed to leave your skin looking visibly brighter and feeling incredibly soft.',
    price: '$160',
    duration: '90 mins',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZuCT2jTUzyyVHJ-_rm4ja-0eKPIoxawMkO33YGCnlBI19vZhkGQ3RH3NKi2aZvKtGeL6_WU6kDnScjgug1nlB62L27NFofuPlGZCxnGhMg9gFPnhuKA55L2go6N3Ig2znmiayO369gXgUNk2EUeYJNaGyPe8TPixtDRxN5XTp6cl_edGw65Nf5Vfryc3XORFW7sI7fkqRHu8wN5dCaYaF6BNvfgQA5rG2RmXed-yLb7zknT4LamK3JaT4WKn8AIwVJWv1kH8Wges'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    location: 'Ponsonby',
    text: 'Hazel Beauty has completely transformed my skin. The BB Glow treatment is a game-changer—I barely need foundation anymore!'
  },
  {
    id: '2',
    name: 'Emma Thompson',
    location: 'Remuera',
    text: 'The most relaxing facial I have ever had. The herbal products smell divine and my skin felt so hydrated for days after.'
  },
  {
    id: '3',
    name: 'Jessica Wu',
    location: 'Auckland CBD',
    text: 'Professional, clean, and results-driven. I highly recommend the Signature Glow for anyone looking for that extra radiance.'
  }
];
