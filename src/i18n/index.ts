import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

// 번역 리소스
const resources = {
  ko: {
    translation: {
      // 네비게이션
      nav: {
        home: '홈',
        about: '소개',
        contact: '연락처',
        login: '로그인',
        getStarted: '시작하기',
      },
      // 홈 페이지
      home: {
        title: 'React + Vite + Tailwind CSS v4',
        subtitle: 'Shadcn/ui와 React Router를 사용한 현대적인 프론트엔드 프로젝트',
        getStarted: '시작하기',
        learnMore: '더 알아보기',
        vite: {
          title: '⚡ Vite',
          description: '빠른 개발 서버와 빌드 도구',
          content: 'ES 모듈 기반의 빠른 개발 서버와 최적화된 프로덕션 빌드를 제공합니다.',
        },
        tailwind: {
          title: '🎨 Tailwind CSS v4',
          description: '유틸리티 우선 CSS 프레임워크',
          content: '최신 버전의 Tailwind CSS로 빠르고 반응형 UI를 구축할 수 있습니다.',
        },
        shadcn: {
          title: '🧩 Shadcn/ui',
          description: '재사용 가능한 컴포넌트 라이브러리',
          content: '복사하여 사용할 수 있는 아름다운 컴포넌트들을 제공합니다.',
        },
      },
      // 소개 페이지
      about: {
        title: '프로젝트 소개',
        subtitle: '현대적인 웹 개발 스택으로 구축된 프론트엔드 프로젝트입니다.',
        techStack: {
          title: '기술 스택',
          description: '사용된 주요 기술들',
          react: 'React 18 + TypeScript',
          vite: 'Vite (빌드 도구)',
          tailwind: 'Tailwind CSS v4',
          shadcn: 'Shadcn/ui',
          router: 'React Router',
          pnpm: 'pnpm (패키지 매니저)',
        },
        features: {
          title: '주요 특징',
          description: '프로젝트의 핵심 기능들',
          typeSafety: '타입 안전성 (TypeScript)',
          hmr: '빠른 개발 환경 (HMR)',
          responsive: '반응형 디자인',
          modernCss: '모던 CSS (Tailwind v4)',
          components: '재사용 가능한 컴포넌트',
          pathAlias: '경로 별칭 (@/*)',
        },
        development: {
          title: '개발 환경',
          description: '프로젝트 실행 방법',
          install: '의존성 설치',
          dev: '개발 서버 실행',
          build: '프로덕션 빌드',
        },
      },
      // 연락처 페이지
      contact: {
        title: '연락처',
        subtitle: '문의사항이 있으시면 언제든지 연락해주세요.',
        form: {
          title: '문의하기',
          description: '아래 양식을 작성하여 메시지를 보내주세요.',
          name: '이름',
          email: '이메일',
          subject: '제목',
          message: '메시지',
          submit: '메시지 보내기',
          placeholders: {
            name: '홍길동',
            email: 'example@email.com',
            subject: '문의 제목을 입력하세요',
            message: '문의 내용을 입력하세요',
          },
        },
        info: {
          email: '📧 이메일',
          phone: '📱 전화',
          address: '📍 주소',
          emailValue: 'contact@example.com',
          phoneValue: '+82 10-1234-5678',
          addressValue: '서울특별시 강남구',
        },
      },
    },
  },
  en: {
    translation: {
      // Navigation
      nav: {
        home: 'Home',
        about: 'About',
        contact: 'Contact',
        login: 'Login',
        getStarted: 'Get Started',
      },
      // Home page
      home: {
        title: 'React + Vite + Tailwind CSS v4',
        subtitle: 'Modern frontend project using Shadcn/ui and React Router',
        getStarted: 'Get Started',
        learnMore: 'Learn More',
        vite: {
          title: '⚡ Vite',
          description: 'Fast development server and build tool',
          content:
            'Provides fast ES module-based development server and optimized production builds.',
        },
        tailwind: {
          title: '🎨 Tailwind CSS v4',
          description: 'Utility-first CSS framework',
          content: 'Build fast and responsive UI with the latest version of Tailwind CSS.',
        },
        shadcn: {
          title: '🧩 Shadcn/ui',
          description: 'Reusable component library',
          content: 'Provides beautiful components that you can copy and use.',
        },
      },
      // About page
      about: {
        title: 'About Project',
        subtitle: 'A frontend project built with modern web development stack.',
        techStack: {
          title: 'Tech Stack',
          description: 'Main technologies used',
          react: 'React 18 + TypeScript',
          vite: 'Vite (Build Tool)',
          tailwind: 'Tailwind CSS v4',
          shadcn: 'Shadcn/ui',
          router: 'React Router',
          pnpm: 'pnpm (Package Manager)',
        },
        features: {
          title: 'Key Features',
          description: 'Core features of the project',
          typeSafety: 'Type Safety (TypeScript)',
          hmr: 'Fast Development Environment (HMR)',
          responsive: 'Responsive Design',
          modernCss: 'Modern CSS (Tailwind v4)',
          components: 'Reusable Components',
          pathAlias: 'Path Aliases (@/*)',
        },
        development: {
          title: 'Development Environment',
          description: 'How to run the project',
          install: 'Install dependencies',
          dev: 'Run development server',
          build: 'Production build',
        },
      },
      // Contact page
      contact: {
        title: 'Contact',
        subtitle: 'Please feel free to contact us if you have any questions.',
        form: {
          title: 'Send Message',
          description: 'Please fill out the form below to send us a message.',
          name: 'Name',
          email: 'Email',
          subject: 'Subject',
          message: 'Message',
          submit: 'Send Message',
          placeholders: {
            name: 'John Doe',
            email: 'example@email.com',
            subject: 'Enter your inquiry subject',
            message: 'Enter your inquiry content',
          },
        },
        info: {
          email: '📧 Email',
          phone: '📱 Phone',
          address: '📍 Address',
          emailValue: 'contact@example.com',
          phoneValue: '+82 10-1234-5678',
          addressValue: 'Gangnam-gu, Seoul',
        },
      },
    },
  },
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'ko',
    debug: import.meta.env.DEV === true,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
  })

export default i18n
