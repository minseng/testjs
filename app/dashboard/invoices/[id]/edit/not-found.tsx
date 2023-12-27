import Link from 'next/link';
// Next.js의 Link 컴포넌트를 임포트 이를 통해 클라이언트 사이드 네비게이션을 사용
import { FaceFrownIcon } from '@heroicons/react/24/outline';
 
// 404 에러 페이지를 렌더링하는 함수형 컴포넌트입니다.
export default function NotFound() {
  return (
    <main className="flex h-full flex-col items-center justify-center gap-2">
      <FaceFrownIcon className="w-10 text-gray-400" />
      <h2 className="text-xl font-semibold">404 Not Found</h2>
      <p>Could not find the requested invoice.</p>
      <Link
        href="/dashboard/invoices"
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
      >
        Go Back
      </Link>
    </main>
  );
}

