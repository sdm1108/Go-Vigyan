import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        about: 'About',
        aboutOrg: 'About  Bijendra Gaushala Welfare Association',
        indianCow: 'Indian Cow',
        importance: 'Importance of Indian Cow',
        breeds: 'Identity & Breeds of Indian Cow',
        nonMilking: 'Importance of Non-Milking Cow',
        training: 'Training',
        schedule: 'Training Schedule',
        economy: 'Cow Based Economy',
        organic: 'Organic Farming',
        vermicompost: 'Vermicompost',
        fertilizer: 'Fertilizer',
        pestControl: 'Pest Control',
        ayurved: 'Cow Based Panchagavya Ayurved',
        shop: 'Shop',
        donate: 'Donate Now'
      },
      contact: {
        helpline: 'Helpline',
        email: 'Send email',
        address: 'Kamdhenu Bhavan, Pt. Baccharaj Vyas Square, Chitar Oli, Mahal, Nagpur, India'
      },
      hero: {
        title: 'Preserving Sacred Traditions',
        subtitle: 'Dedicated to cow protection, organic farming, and sustainable living'
      },
      about: {
        title: ' Bijendra Gaushala Welfare Association',
        description: 'GVAK is committed to promoting Indian cow breeds, organic farming practices, and traditional agricultural wisdom. We believe in sustainable development through cow-based economy and natural farming methods.'
      },
      join: {
        title: 'Become a GO-Sevak',
        description: 'Join our mission to protect and serve indigenous cow breeds',
        button: 'Join Us'
      },
      donateSection: {
        title: 'Support Cow Welfare',
        description: 'Your contribution helps us protect and care for indigenous cows',
        button: 'Donate Now'
      },
      testimonials: {
       title: 'What People Say',
       list: [
       {
         id: 1,
         quote: 'The training programs have transformed our farming practices completely.',
      name: 'Rajesh Kumar',
      role: 'Farmer',
      location: 'India'
    },
    {
      id: 2,
      quote: 'Excellent guidance on organic farming and cow-based agriculture.',
      name: 'Priya Sharma',
      role: 'Organic Farmer',
      location: 'India'
    },
    {
      id: 3,
      quote: 'Their dedication to preserving Indian cow breeds is remarkable.',
      name: 'Amit Patel',
      role: 'Gaushala Volunteer',
      location: 'India'
    },
    {
      id: 4,
      name: "Sunita Devi",
      role: "Homemaker",
      location: "Bihar",
      quote: "The vermicompost training helped me create organic fertilizer at home. It's cost-effective and environmentally friendly.",
      image: "/images/testimonials/sunita.jpg"
    }
  ]
},
      gallery: {
        title: 'Our Work',
        adopt: 'Adopt a Cow',
        farming: 'Organic Farming',
        training: 'Training Sessions',
        care: 'Cow Care'
      },
      news: {
        title: 'Latest News & Articles',
        readMore: 'Read More'
      }
    }
  },
  hi: {
    translation: {
      nav: {
        home: 'होम',
        about: 'हमारे बारे में',
        aboutOrg: 'गो विज्ञान अनुसंधान केंद्र के बारे में',
        indianCow: 'भारतीय गाय',
        importance: 'भारतीय गाय का महत्व',
        breeds: 'भारतीय गाय की पहचान और नस्लें',
        nonMilking: 'गैर दुधारू गाय का महत्व',
        training: 'प्रशिक्षण',
        schedule: 'प्रशिक्षण कार्यक्रम',
        economy: 'गाय आधारित अर्थव्यवस्था',
        organic: 'सेंद्रिय खेती',
        vermicompost: 'केंचुआ खाद',
        fertilizer: 'अमृत पानी - उर्वरक',
        pestControl: 'कीट नियंत्रक',
        ayurved: 'गाय आधारित पंचगव्य आयुर्वेद',
        shop: 'दुकान',
        donate: 'अभी दान करें'
      },
      contact: {
        helpline: 'हेल्पलाइन',
        email: 'ईमेल भेजें',
        address: 'कामधेनु भवन, पं. बच्चाराज व्यास स्क्वायर, चितर ओली, महल, नागपुर, भारत'
      },
      hero: {
        title: 'पवित्र परंपराओं का संरक्षण',
        subtitle: 'गौ संरक्षण, जैविक खेती और टिकाऊ जीवन के लिए समर्पित'
      },
      about: {
        title: 'गो विज्ञान अनुसंधान केंद्र',
        description: 'GVAK भारतीय गाय की नस्लों, जैविक खेती प्रथाओं और पारंपरिक कृषि ज्ञान को बढ़ावा देने के लिए प्रतिबद्ध है। हम गाय आधारित अर्थव्यवस्था और प्राकृतिक खेती के तरीकों के माध्यम से सतत विकास में विश्वास करते हैं।'
      },
      join: {
        title: 'गो-सेवक बनें',
        description: 'देशी गाय की नस्लों की रक्षा और सेवा के हमारे मिशन में शामिल हों',
        button: 'हमसे जुड़ें'
      },
      donateSection: {
        title: 'गौ कल्याण का समर्थन करें',
        description: 'आपका योगदान हमें देशी गायों की रक्षा और देखभाल में मदद करता है',
        button: 'अभी दान करें'
      },
      testimonials: {
  title: 'लोग क्या कहते हैं',
  list: [
    {
      id: 1,
      quote: 'प्रशिक्षण कार्यक्रमों ने हमारी खेती की प्रथाओं को पूरी तरह से बदल दिया है।',
      name: 'राजेश कुमार',
      role: 'किसान',
      location: 'भारत'
    },
    {
      id: 2,
      quote: 'जैविक खेती और गाय आधारित कृषि पर उत्कृष्ट मार्गदर्शन।',
      name: 'प्रिया शर्मा',
      role: 'जैविक किसान',
      location: 'भारत'
    },
    {
      id: 3,
      quote: 'भारतीय गाय की नस्लों को संरक्षित करने के प्रति उनका समर्पण उल्लेखनीय है।',
      name: 'अमित पटेल',
      role: 'गौशाला सेवक',
      location: 'भारत'
    }
  ]
},
      gallery: {
        title: 'हमारा काम',
        adopt: 'गाय गोद लें',
        farming: 'जैविक खेती',
        training: 'प्रशिक्षण सत्र',
        care: 'गौ देखभाल'
      },
      news: {
        title: 'ताज़ा खबरें और लेख',
        readMore: 'और पढ़ें'
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
