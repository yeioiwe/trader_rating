export interface TranslationTypes {
    header: {
        youtubeBanner: {
            title_1: string;
            title_2: string;
            description: string;
        };
        lawyerBanner: {
            title_1: string;
            title_2: string;
            description: string;
        };
    };
    sidebar: {
        search: {
            title: string;
            placeholder: string;
        };
        check: {
            title: string;
            description: string;
            button: string;
        };
        youtube: {
            title: string;
            description: string;
            tg_button: string;
            yt_button: string;
        };
        scammers: {
            title: string;
            description: string;
            button_card: string;
            button: string;
        };
        verified: {
            title: string;
            description: string;
            button_card: string;
            button: string;
        };
        posts: {
            title: string;
            button: string;
        };
        news: {
            title: string;
            button: string;
        };
    };
    main: {
        title: string;
        updated_at: string;
        description: string;

        scammers: {
            title: string;
            statistic_reports: string;
            statistic_comments: string;
            statistic_rate: string;
            project_link: string;
            button_review: string;
        };
        verified: {
            title: string;
            statistic_profit: string;
            statistic_comments: string;
            statistic_rate: string;
            project_link: string;
            button_review: string;
        };
        requestVerification: {
            title: string;
            description: string;
            button_send_request: string;
        };
        posts: {
            title: string;
            description: string;
        };

        button_full_list: string;
        button_how_review: string;
    };
}
