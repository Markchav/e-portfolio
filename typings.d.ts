interface SanityBody {
    _createdAt: string;
    _id: string;
    _rev:string;
    _updatedAt:string;
}

interface Image {
    _type: "image";
    asset:{
        _ref: string;
        _type:"reference";
    };
}

export interface PageInfo extends SanityBody {
    _type:"pageInfo";
    backgroundInformationFirstParagraph:string;
    backgroundInformationSecondParagraph:string;
    backgroundInformationThirdParagraph:string;
    email:string;
    role:string;
    heroImage: Image;
    heroTitle1:string;
    heroTitle2:string;
    heroTitle3:string;
    phoneNumber:string;
    intriguingContactBodyHeader:string;
    profilePic:Image;
    technologies:Technology[];
}


export interface Skill extends SanityBody {
    _type:"skill";
    title:string;
    image:Image;
}

export interface Technology extends SanityBody {
    _type:"skill";
    title:string;
    image:Image;


}

export interface Experience extends SanityBody {
    _type:"experience";
    company:string;
    dateStarted:date;
    dateEnded:date;
    isCurrentlyWorkingHere:boolean;
    jobTitle:string;
    points:string[];
    technologies:Technology[];
}

export interface Project extends SanityBody {
    _type:"project";
    title:string;
    image:Image;
    linkToBuild:string;
    summary:string;
    technologies:Technology[];
    linkToGithub:string
}


export interface Social extends SanityBody {
    _type: "social";
    title: string;
    url:string;
}

