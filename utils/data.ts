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
            'Framer Motion',
            'GitHub API',
        ],
        features: [
            '조직 생성 및 멤버 초대',
            '북마크 기능',
            '검색 기능',
            '실시간 마우스 커서 및 작업물 공유',
            '실시간 협업 기능',
        ],
        image: '',
        gitUrl: 'https://github.com/weeeeey/Cost-it',
        siteUrl: 'https://cost-it.vercel.app/',
        videoUrl: 'https://www.youtube.com/embed/AYzsVDjYuek',
    },
    {
        title: 'WC: we Climber',
        description: '클라이밍을 즐기는 사람들을 위한 커뮤니티',
        skills: [
            'Next.js',
            'TypeScript',
            'Tailwind CSS',
            'Framer Motion',
            'GitHub API',
        ],
        features: [
            '반응형 디자인',
            '카카오 지도 API를 통한 위치 공유',
            '인기 게시물 및 사용자 추천',
            '좋아요 및 댓글 기능',
            '게시판 생성/수정/삭제/검색 기능',
        ],
        image: '/images/portfolio.png',
        gitUrl: 'https://github.com/weeeeey/climb',
        siteUrl: 'https://climb-tawny.vercel.app/',
    },
    {
        title: 'Wmall',
        description: 'Admin 페이지를 통한 Ecoommerce 사이트 관리',
        features: [
            '반응현 디자인',
            'Admin 페이지: clerk을 통한 유저 관리',
            'Admin 페이지: 스토어, 상품, 주문, 회원, 카테고리 관리',
            'Admin 페이지: Cloudinary를 통한 이미지 관리',
            'Admin 페이지: Toss payment를 통한 결제 관리',
            'Ecormmerce 사이트: 카테고리 별 상품 분류',
            'Ecormmerce 사이트: color,size 를 통한 필터링 및 검색 기능',
            'Ecormmerce 사이트: Toss payment를 통한 안전한 결제 시스템',
        ],
        gitUrl: 'https://github.com/weeeeey/wmall---admin',
        siteUrl: 'https://wmall-admin.vercel.app/',
        image: '',
        skills: [],
        videoUrl: 'https://youtu.be/-Snlr2dZY4g',
    },
    {
        title: 'Skywnw',
        description: '숙소 대여 및 예약 서비스를 위한 사이트 ',
        features: [
            '반응현 디자인',
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
        image: '',
        skills: [],
        videoUrl: 'https://youtu.be/v178qSOL8zM',
    },
    {
        title: 'Wiscord',
        description: 'socket.io를 이용한 실시간 채팅 서비스',
        features: [
            '숙소 검색 및 예약',
            '숙소 등록 및 수정',
            '즐겨찾기 시스템',
            '카테고리 분류를 통한 숙소 검색',
            '',
        ],
        gitUrl: '',
        image: '',
        siteUrl: '',
        skills: [],
        videoUrl: 'https://youtu.be/1HJu1lRHPGk',
    },
];
