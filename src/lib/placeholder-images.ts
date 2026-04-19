export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

export const PlaceHolderImages: ImagePlaceholder[] = [
  {
    id: "avatar",
    description: "Profile avatar image",
    imageUrl: "/image.jpeg",
    imageHint: "professional developer portrait"
  },
  {
    id: "fixmyarea",
    description: "FixMyArea project screenshot",
    imageUrl: "/projects/fixmyarea.png",
    imageHint: "community reporting system interface"
  },
  {
    id: "agroinsight",
    description: "AgroInsight project screenshot",
    imageUrl: "/projects/agroinsight.png",
    imageHint: "agricultural dashboard with charts"
  },
  {
    id: "opendesk",
    description: "OpenDesk project screenshot",
    imageUrl: "/projects/opendesk.png",
    imageHint: "developer collaboration platform"
  },
  {
    id: "aplyo",
    description: "AplyO project screenshot",
    imageUrl: "/projects/aplyo.png",
    imageHint: "job application tracker interface"
  },
  {
    id: "gym",
    description: "Gym Website project screenshot",
    imageUrl: "/projects/gym.png",
    imageHint: "modern fitness website design"
  }
];
