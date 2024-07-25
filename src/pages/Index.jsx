import React from 'react';
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const HistoricalPeriod = ({ title, years, description }) => (
  <Card className="mb-6">
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{years}</CardDescription>
    </CardHeader>
    <CardContent>
      <p>{description}</p>
    </CardContent>
  </Card>
);

const TimelineEvent = ({ year, event }) => (
  <div className="mb-4">
    <h3 className="text-lg font-semibold">{year}</h3>
    <p>{event}</p>
  </div>
);

const Index = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center">China's Rich History</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Key Historical Periods</h2>
          <ScrollArea className="h-[600px] rounded-md border p-4">
            <HistoricalPeriod
              title="Ancient China"
              years="c. 2100 BCE - 221 BCE"
              description="This period includes the Xia, Shang, and Zhou dynasties. It saw the development of Chinese writing, philosophy, and the foundations of Chinese culture."
            />
            <HistoricalPeriod
              title="Imperial China"
              years="221 BCE - 1912 CE"
              description="Beginning with the Qin dynasty and ending with the fall of the Qing dynasty. This era saw numerous technological advancements, the construction of the Great Wall, and the flourishing of arts and literature."
            />
            <HistoricalPeriod
              title="Republic of China"
              years="1912 - 1949"
              description="A period of modernization and political turmoil, including the May Fourth Movement and the Chinese Civil War."
            />
            <HistoricalPeriod
              title="People's Republic of China"
              years="1949 - Present"
              description="The current era, marked by communist rule, economic reforms, and China's rise as a global superpower."
            />
          </ScrollArea>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4">Timeline of Major Events</h2>
          <ScrollArea className="h-[600px] rounded-md border p-4">
            <TimelineEvent year="c. 2700 BCE" event="Yellow Emperor's reign, traditional founder of Chinese civilization" />
            <TimelineEvent year="221 BCE" event="Qin Shi Huang unifies China, becoming the first emperor" />
            <TimelineEvent year="206 BCE - 220 CE" event="Han Dynasty, considered a golden age in Chinese history" />
            <TimelineEvent year="105 CE" event="Invention of paper by Cai Lun" />
            <TimelineEvent year="618 - 907" event="Tang Dynasty, known for its cultural achievements and expansion" />
            <TimelineEvent year="1271 - 1368" event="Yuan Dynasty, established by Mongol conquerors" />
            <TimelineEvent year="1405 - 1433" event="Zheng He's maritime expeditions" />
            <TimelineEvent year="1644 - 1912" event="Qing Dynasty, the last imperial dynasty of China" />
            <TimelineEvent year="1839 - 1842" event="First Opium War with Britain" />
            <TimelineEvent year="1912" event="Establishment of the Republic of China" />
            <TimelineEvent year="1949" event="Founding of the People's Republic of China" />
            <TimelineEvent year="1978" event="Deng Xiaoping initiates economic reforms" />
            <TimelineEvent year="2001" event="China joins the World Trade Organization" />
          </ScrollArea>
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-lg">Explore the fascinating journey of one of the world's oldest civilizations, from ancient times to the modern era.</p>
        <img src="/placeholder.svg" alt="Great Wall of China" className="mx-auto object-cover w-full h-[300px] mt-4 rounded-lg" />
      </div>
    </div>
  );
};

export default Index;
