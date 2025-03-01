import MemoryFeed from "@/components/MemoryFeed"
import MemoryChat from "@/components/MemoryChat"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Masonry from "@/components/Mansory";
import MemoryInput from "@/components/MemoryInput"
export default function MemoriesPage() {
  const data = [
    { id: 1, image: '/images/IMG_8182.jpg', height: 600, description:'Mary hanging out at the hotel with her cousins.', tag: "Daughters" },
    { id: 2, image: '/images/IMG_8183.jpg', height: 500, description:'Playing games together!', tag: "Daughters"},
    { id: 3, image: '/images/IMG_8184.jpg', height: 600, description:'Mary enjoying a snack!', tag: "Daughters" },
    { id: 4, image: '/images/IMG_8185.jpg', height: 600, description:'Big sister doing little sister\'s hair.', tag: "Daughters"},
    { id: 5, image: '/images/IMG_8186.jpg', height: 600, description:'We went to the amusement park and enjoyed laughing at the clowns!', tag: "Amusement Park"},
    { id: 6, image: '/images/IMG_8187.jpg', height: 600, description:'Getting off the rides.', tag: "Amusement Park"},
    { id: 7, image: '/images/IMG_8189.jpg', height: 600, description:'Mary having fun on the carousel!.', tag: "Amusement Park"},
    { id: 8, image: '/images/IMG_8190.jpg', height: 500, description:'Dinner together.', tag: "Amusement Park"},
    { id: 9, image: '/images/IMG_8191.jpg', height: 600, description:'John, Mary, Joe, and I on Mary and John\s wedding day.', tag: "Wedding"},
    { id: 10, image: '/images/IMG_8192.jpg', height: 600, description:'Cutting the wedding cake at the reception. Yum!', tag: "Wedding"},
    { id: 11, image: '/images/IMG_8193.jpg', height: 500, description:'Mary and John walking out of the church after the wedding ceremony.', tag: "Wedding"},
    { id: 12, image: '/images/IMG_8194.jpg', height: 600, description:'Mary and John outside the church with Grandma Betty.', tag: "Wedding"},
    { id: 13, image: '/images/IMG_8195.jpg', height: 600, description:'The bride and grrom share a kiss!', tag: "Wedding"},
    { id: 14, image: '/images/Baby7.webp', height: 500, description:'Mama and baby are healthy! Jackie is glad that the labor is over and baby Emma is here safe.', tag: "Baby"},
    { id: 15, image: '/images/Baby3.png', height: 600, description:'Jackie and her sister in the hospital! She started having contractions late on November 16 and checked into the hospital once the contractions were 3 minutes apart.', tag: "Baby" },
    { id: 16, image: '/images/Baby1.png', height: 500, description:'Emma is dressed, in her car seat, and ready to go home to meet the rest of the family.', tag: "Baby" },
    { id: 17, image: '/images/Baby4.jpg', height: 600, description:'Emma resting after being cleaned and eating.', tag: "Baby"},
    { id: 18, image: '/images/Baby5.webp', height: 600, description:'Aunt Margaret with Baby Emma, who is cozy in the blaket that I made for her.', tag: "Baby"},
    { id: 29, image: '/images/Baby6.jpg', height: 600, description:'Big sister meeting baby sister for the first time!', tag: "Baby"},
    { id: 20, image: '/images/Baby7.webp', height:500, description:'First selfie with mom and Emma! So cute!', tag: "Baby"},
  ];
  // Split data into three parts
  const recentMemories = data.slice(14, 20);
  const pastMemories = data.slice(8,13);
  const oldMemories = data.slice(0,8);
  return (
    <div className="min-h-screen bg-[#F8F4EB] px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Tabs defaultValue="feed" className=" w-full space-y-8 mt-2">
          <TabsList className="w-full sm:w-auto bg-white/50 backdrop-blur-sm">
            <TabsTrigger
              value="feed"
              className="text-lg data-[state=active]:bg-white data-[state=active]:shadow-sm "
            >
              Memory Feed
            </TabsTrigger>
            <TabsTrigger
              value="chat"
              className="text-lg data-[state=active]:bg-white data-[state=active]:shadow-sm"
            >
              Chat
            </TabsTrigger>
          </TabsList>
          <TabsContent value="feed" className="mt-6 space-y-12">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Baby Emma is Born November 17, 2024</h2>
              <Masonry data={recentMemories} />
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-6">Mary and John's Wedding August 31, 1996</h2>
              <Masonry data={pastMemories} />
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-6">Family Vacation April 1984</h2>
              <Masonry data={oldMemories} />
            </div>
          </TabsContent>
          <TabsContent value="chat" className="mt-6">
            <div className="space-y-4">
              <div className="p-4 bg-white rounded-lg shadow">
                <h3 className="text-lg font-medium mb-4">Add New Memory</h3>
                <MemoryInput />
              </div>
              <MemoryChat />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}