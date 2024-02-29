export interface CardType {
    title: string;
    description: string;
    skills: string[];
    features: string[];
    image: string;
    gitUrl: string;
    siteUrl: string;
    videoUrl?: string;
}

export const cards: CardType[] = [
    {
        title: 'Cost-it',
        description: '조직 내 멤버들과 실시간으로 공동 편집이 가능한 작업 공간',
        skills: [
            'Next.js',
            'TypeScript',
            'Tailwind CSS',
            'Convex & Clerk',
            'Liveblock',
            'Zustand',
            'React-Hook-Form & zod',
        ],
        features: [
            '조직 생성 및 멤버 초대',
            '북마크 기능',
            '검색 기능',
            '실시간 마우스 커서 및 작업물 공유',
            '실시간 협업 기능',
        ],
        image: '/thumb/cost.png',
        gitUrl: 'https://github.com/weeeeey/Cost-it',
        siteUrl: 'https://cost-it.vercel.app/',
        videoUrl: 'costIt',
    },
    {
        title: 'WC: we Climber',
        description: '클라이밍을 즐기는 사람들을 위한 커뮤니티',
        skills: [
            'Next.js',
            'TypeScript',
            'Tailwind CSS',
            'Prisma /MongoDB',
            'Clerk',
            'React Query',
            'Zustand',
            'Kakao Map API',
            'React-Hook-Form & zod',
        ],
        features: [
            '카카오 지도 API를 통한 위치 공유',
            '인기 게시물 및 사용자 추천',
            '좋아요 및 댓글 기능',
            '게시판 생성/수정/삭제/검색 기능',
        ],
        image: '/thumb/climb.png',
        gitUrl: 'https://github.com/weeeeey/climb',
        siteUrl: 'https://climb-tawny.vercel.app/',
        videoUrl: 'climb',
    },
    {
        title: 'Wmall',
        description: 'Admin 페이지를 통한 Ecoommerce 사이트 관리',
        features: [
            'Admin: clerk을 통한 유저 관리',
            'Admin: 스토어, 상품, 주문, 회원, 카테고리 관리',
            'Admin: Cloudinary를 통한 이미지 관리',
            'Admin: Toss payment를 통한 결제 관리',
            'Ecormmerce: 카테고리 별 상품 분류',
            'Ecormmerce: color,size 를 통한 필터링 및 검색 기능',
            'Ecormmerce: Toss payment를 통한 안전한 결제 시스템',
        ],
        gitUrl: 'https://github.com/weeeeey/wmall---admin',
        siteUrl: 'https://wmall-admin.vercel.app/',
        image: '/thumb/wmall.png',
        skills: [
            'Next.js',
            'TypeScript',
            'Tailwind CSS',
            'Clerk',
            'Prisma',
            'Zustand',
            'React-Hook-Form & zod',
            'Cloudinary',
            'Toss Payment',
        ],
        videoUrl: 'wmall',
    },
    {
        title: 'Skywnw',
        description: '숙소 대여 및 예약 서비스를 위한 사이트 ',
        features: [
            '숙소 검색 및 예약',
            '숙소 등록 및 수정',
            '즐겨찾기 시스템',
            '카테고리 분류를 통한 숙소 검색',
            '평가 및 리뷰 시스템',
            'Cloudinary를 통한 이미지 관리',
            'Next-auth를 통한 소셜 로그인 및 회원가입',
        ],
        gitUrl: 'https://github.com/weeeeey/skywnw',
        siteUrl: 'https://skywnw.vercel.app/',
        image: '/thumb/skywnw.png',
        skills: [
            'Next.js',
            'Tailwind CSS',
            'React-Leaflet',
            'Cloudinary',
            'Next-auth',
            'Prisma',
            'Zustand',
            'React-Hook-Form',
            'World-Countries',
        ],
        videoUrl: 'skywnw',
    },
    {
        title: 'Wiscord',
        description: 'socket.io를 이용한 실시간 채팅 서비스',
        features: [
            '실시간 채팅 및 화상 채팅',
            '파일/이미지 업로드',
            '메시지 업데이트 및 삭제',
            '다중 서버 채널',
            '서버 초대',
            '무한 스크롤을 통한 메시지 로딩',
        ],
        gitUrl: 'https://github.com/weeeeey/discord',
        image: '/thumb/wiscord.png',
        siteUrl: '',
        skills: [
            'Next.js',
            'TypeScript',
            'Tailwind CSS',
            'Prisma',
            'Clerk',
            'Zustand',
            'Socket.io',
            'Livekit',
        ],
        videoUrl: 'wiscord',
    },
];
