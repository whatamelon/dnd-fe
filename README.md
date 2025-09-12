# AI 옷 착용샷 생성 사이트

AI 기술을 활용하여 옷 사진을 업로드하고 다양한 분위기, 채도, 장소 설정으로 모델 착용샷을 생성하는 웹 서비스입니다.

## ✨ 주요 기능

### 🎯 대표 기능 1: 다중 옷 착용샷 생성

- 여러 개의 옷 사진을 업로드
- 분위기, 채도, 장소 설정으로 맞춤형 모델 착용샷 생성
- 다양한 스타일 조합으로 다양한 결과물 제공

### 🎯 대표 기능 2: 단일 옷 착용샷 생성

- 1개의 옷 사진을 업로드
- 분위기, 채도, 장소 설정으로 모델 착용샷 생성
- 빠르고 간편한 착용샷 생성

### 📱 추가 기능

- **히스토리 관리**: 생성한 착용샷 히스토리 확인
- **요금제**: 다양한 플랜으로 서비스 이용
- **마이페이지**: 개인 설정 및 생성 이력 관리

## 🚀 기술 스택

- **React 19** - UI 라이브러리
- **TypeScript** - 타입 안전성
- **Vite** - 빠른 빌드 도구
- **Tailwind CSS v4** - 유틸리티 우선 CSS 프레임워크
- **Shadcn/ui** - 재사용 가능한 컴포넌트 라이브러리
- **React Router** - 클라이언트 사이드 라우팅
- **React i18next** - 국제화(i18n) 라이브러리
- **TanStack Query** - 서버 상태 관리
- **Lucide React** - 아이콘 라이브러리
- **Prettier** - 코드 포맷터
- **ESLint** - 코드 린터
- **pnpm** - 빠른 패키지 매니저

## 📋 사전 요구사항

- Node.js 22.x
- pnpm

## 🛠️ 설치 및 실행

### 1. 의존성 설치

```bash
pnpm install
```

### 2. 개발 서버 실행

```bash
pnpm run dev
```

### 3. 프로덕션 빌드

```bash
pnpm run build
```

### 4. 빌드 미리보기

```bash
pnpm run preview
```

### 5. 코드 포맷팅

```bash
# 코드 포맷팅
pnpm run format

# 포맷팅 검사
pnpm run format:check
```

### 6. 린팅

```bash
# 린팅 검사
pnpm run lint

# 린팅 자동 수정
pnpm run lint:fix
```

## 📁 프로젝트 구조

```
src/
├── components/          # 재사용 가능한 컴포넌트
│   ├── ui/             # Shadcn/ui 컴포넌트
│   ├── Navigation.tsx  # 네비게이션 컴포넌트
│   └── LanguageSwitcher.tsx # 언어 전환 컴포넌트
├── pages/              # 페이지 컴포넌트
│   ├── Home.tsx        # 홈 페이지
│   ├── About.tsx       # 소개 페이지
│   └── Contact.tsx     # 연락처 페이지
├── providers/          # Context Provider들
│   └── QueryProvider.tsx # TanStack Query Provider
├── i18n/               # 국제화 설정
│   └── index.ts        # i18n 설정 및 번역 리소스
├── lib/                # 유틸리티 함수
│   └── utils.ts        # 공통 유틸리티
├── App.tsx             # 메인 앱 컴포넌트
├── main.tsx            # 앱 진입점
└── index.css           # 글로벌 스타일 (Tailwind CSS v4)
```

## 🎨 서비스 특징

- **AI 기반 생성**: 최신 AI 기술로 현실적인 모델 착용샷 생성
- **다양한 설정 옵션**: 분위기, 채도, 장소 등 세밀한 커스터마이징
- **빠른 처리 속도**: 고성능 AI 모델로 빠른 결과물 제공
- **고품질 결과물**: 고해상도 이미지로 상세한 착용샷 생성
- **사용자 친화적**: 직관적인 UI/UX로 쉬운 사용
- **히스토리 관리**: 생성한 모든 착용샷을 체계적으로 관리
- **반응형 디자인**: 모바일부터 데스크톱까지 완벽한 반응형
- **다국어 지원**: 한국어/영어 지원으로 글로벌 서비스

## 🛠️ 개발 가이드

### 새로운 컴포넌트 추가

```bash
# Shadcn/ui 컴포넌트 추가
pnpm dlx shadcn@latest add [component-name]

# 예시
pnpm dlx shadcn@latest add dialog
```

### 경로 별칭 사용

```typescript
// 절대 경로로 import
import { Button } from '@/components/ui/button'
import Home from '@/pages/Home'
```

### Tailwind CSS v4 사용

```tsx
// 유틸리티 클래스 사용
<div className="flex items-center justify-center p-4 bg-blue-500 text-white">Hello World</div>
```

## 📝 스크립트

- `pnpm run dev` - 개발 서버 실행 (http://localhost:5173)
- `pnpm run build` - 프로덕션 빌드
- `pnpm run preview` - 빌드 결과 미리보기
- `pnpm run lint` - ESLint로 코드 검사

## 🔧 설정 파일

- `vite.config.ts` - Vite 설정 (Tailwind CSS v4 플러그인 포함)
- `tsconfig.json` - TypeScript 설정 (경로 별칭 포함)
- `components.json` - Shadcn/ui 설정
- `tailwind.config.js` - Tailwind CSS 설정 (자동 생성)

## 📄 라이선스

MIT License
# dnd-fe
