import '@/app/ui/global.css';
// global.css 파일을 임포트 전역 스타일을 정의
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';
// next 패키지의 Metadata 타입을 임포트


export const metadata: Metadata = {
  title: 'Acme Dashboard', // 웹 페이지의 제목
  description: 'The official Next.js Course Dashboard, built with App Router.', // 웹 페이지의 설명
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'), // 메타데이터의 기본 URL
};
// metadata 객체를 정의하고 초기 값을 설정합니다.

// RootLayout 함수 컴포넌트를 정의합니다.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
  
    <html>
      <body className={`${inter.className} antialiased`}>
        {/* 자식 컴포넌트를 출력합니다. */}
        {children}
      </body>
    </html>
  );
}
