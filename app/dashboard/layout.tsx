import SideNav from '@/app/ui/dashboard/sidenav';
 

// Layout 컴포넌트는 자식 요소(children)를 받아와서 렌더링합니다.
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}