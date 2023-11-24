import ImageGallery from "react-image-gallery";

const images = [
   {
     original: "https://images.pexels.com/photos/1428348/pexels-photo-1428348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
     thumbnail: "https://images.pexels.com/photos/1428348/pexels-photo-1428348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
   },
   {
     original: "https://storage.cloud.google.com/mount-kataka-suites/airbnb-2.jpeg",
     thumbnail: "https://storage.cloud.google.com/mount-kataka-suites/airbnb-2.jpeg",
   },
   {
     original: "https://picsum.photos/id/1019/1000/600/",
     thumbnail: "https://picsum.photos/id/1019/250/150/",
   },
 ];

 export default function Gallery() {

   return (
      <ImageGallery items={images} />
   );
}