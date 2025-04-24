<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "$lib/components/ui/avatar";
  import { Card, CardContent } from "$lib/components/ui/card";
  import {
    TabsContent,
    Tabs,
    TabsList,
    TabsTrigger,
  } from "$lib/components/ui/tabs";
  import { Badge } from "$lib/components/ui/badge";
  import { Calendar, Clock, MessageSquare, Users, X } from "@lucide/svelte"; // Corrected import for lucide
  import toast from "svelte-5-french-toast";

  let advisors = [
    {
      id: 1,
      name: "Dr. Sarah Chen",
      title: "Biotech Executive & Researcher",
      categories: ["Pharmaceuticals", "Biotech", "Career Development"],
      rating: 4.9,
      image: "https://randomuser.me/api/portraits/women/23.jpg",
      lastContact: "2 days ago",
      nextSession: "Tomorrow, 3:00 PM",
      messages: 2,
    },
    {
      id: 4,
      name: "David Kim",
      title: "Financial Advisor & Wealth Coach",
      categories: ["Finance", "Investing", "Retirement"],
      rating: 4.6,
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      lastContact: "1 week ago",
      nextSession: "Friday, 11:00 AM",
      messages: 0,
    },
    {
      id: 5,
      name: "Elena Rodriguez",
      title: "Creative Director & Design Mentor",
      categories: ["Design", "Creative", "Branding"],
      rating: 4.9,
      image: "https://randomuser.me/api/portraits/women/45.jpg",
      lastContact: "Just now",
      nextSession: "Not scheduled",
      messages: 5,
    },
  ];

  const upcomingSessions = [
    {
      id: 1,
      advisorId: 1,
      advisorName: "Dr. Sarah Chen",
      advisorImage: "https://randomuser.me/api/portraits/women/23.jpg",
      date: "Apr 21, 2025",
      time: "3:00 PM - 4:00 PM",
      topic: "Career Transition Strategy",
      status: "confirmed",
    },
    {
      id: 2,
      advisorId: 4,
      advisorName: "David Kim",
      advisorImage: "https://randomuser.me/api/portraits/men/22.jpg",
      date: "Apr 24, 2025",
      time: "11:00 AM - 12:00 PM",
      topic: "Retirement Planning Review",
      status: "confirmed",
    },
  ];

  const recentActivity = [
    {
      id: 1,
      type: "message",
      advisorId: 5,
      advisorName: "Elena Rodriguez",
      advisorImage: "https://randomuser.me/api/portraits/women/45.jpg",
      time: "Just now",
      content: "Sent you feedback on your portfolio",
    },
    {
      id: 2,
      type: "session",
      advisorId: 1,
      advisorName: "Dr. Sarah Chen",
      advisorImage: "https://randomuser.me/api/portraits/women/23.jpg",
      time: "2 days ago",
      content: "Session completed: Career Path Discussion",
    },
    {
      id: 3,
      type: "added",
      advisorId: 4,
      advisorName: "David Kim",
      advisorImage: "https://randomuser.me/api/portraits/men/22.jpg",
      time: "1 week ago",
      content: "Added to your circle",
    },
  ];

  const handleRemoveAdvisor = (advisorId: number) => {
    advisors = advisors.filter((advisor) => advisor.id !== advisorId);

    toast.success("Advisor removed from your circle");
  };
</script>

<svelte:head>
  <title>My Advisor Circle</title>
</svelte:head>

<div class="min-h-screen flex flex-col">
  <main class="flex-grow">
    <div class="bg-muted/30 py-8">
      <div class="container mx-auto px-4">
        <h1 class="text-3xl font-bold mb-2">Your Dashboard</h1>
        <p class="text-muted-foreground">
          Manage your personal board of advisors and upcoming sessions
        </p>
      </div>
    </div>

    <div class="container mx-auto px-4 py-8">
      <Tabs value="circle">
        <TabsList class="mb-8 bg-muted/50">
          <TabsTrigger value="circle" class="px-6 md:px-8 py-2"
            >Your Circle</TabsTrigger
          >
          <TabsTrigger value="sessions" class="px-6 md:px-8 py-2"
            >Sessions</TabsTrigger
          >
          <TabsTrigger value="activity" class="px-6 md:px-8 py-2"
            >Activity</TabsTrigger
          >
        </TabsList>

        <TabsContent value="circle">
          <div
            class="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4"
          >
            <div>
              <h2 class="text-2xl font-semibold mb-1">Your Personal Board</h2>
              <p class="text-muted-foreground">
                {advisors.length} advisor{advisors.length !== 1 ? "s" : ""} in your
                circle
              </p>
            </div>
            <Button class="bg-tribe-600 hover:bg-tribe-700">
              <a href="/discover">Add More Advisors</a>
            </Button>
          </div>

          {#if advisors.length > 0}
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {#each advisors as advisor (advisor.id)}
                <Card class="overflow-hidden">
                  <CardContent class="p-0 h-full">
                    <div class="p-6">
                      <div class="flex justify-between items-start mb-4">
                        <Avatar class="h-16 w-16 border-2 border-background">
                          <AvatarImage src={advisor.image} alt={advisor.name} />
                          <AvatarFallback
                            >{advisor.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}</AvatarFallback
                          >
                        </Avatar>
                        <Button
                          variant="ghost"
                          size="icon"
                          class="h-8 w-8 text-muted-foreground"
                          onclick={() => handleRemoveAdvisor(advisor.id)}
                        >
                          <X class="h-4 w-4" />
                        </Button>
                      </div>

                      <h3 class="text-xl font-semibold mb-1">{advisor.name}</h3>
                      <p class="text-muted-foreground mb-4">{advisor.title}</p>

                      <div class="space-y-2 mb-4">
                        <div class="flex items-center text-sm">
                          <Clock class="h-4 w-4 mr-2 text-muted-foreground" />
                          <span>Last contact: {advisor.lastContact}</span>
                        </div>
                        <div class="flex items-center text-sm">
                          <Calendar
                            class="h-4 w-4 mr-2 text-muted-foreground"
                          />
                          <span>Next session: {advisor.nextSession}</span>
                        </div>
                        {#if advisor.messages > 0}
                          <div
                            class="flex items-center text-sm text-tribe-600 font-medium"
                          >
                            <MessageSquare class="h-4 w-4 mr-2" />
                            <span
                              >{advisor.messages} new message{advisor.messages !==
                              1
                                ? "s"
                                : ""}</span
                            >
                          </div>
                        {/if}
                      </div>

                      <div class="flex flex-wrap gap-2 mb-4">
                        {#each advisor.categories as category}
                          <Badge variant="outline" class="bg-muted/50">
                            {category}
                          </Badge>
                        {/each}
                      </div>

                      <div class="grid grid-cols-2 gap-2">
                        <Button variant="outline">Message</Button>
                        <Button>Schedule</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              {/each}
            </div>
          {:else}
            <div class="text-center py-12 border rounded-lg bg-muted/20">
              <div
                class="mx-auto w-20 h-20 flex items-center justify-center rounded-full bg-muted mb-4"
              >
                <Users class="h-10 w-10 text-muted-foreground/50" />
              </div>
              <h3 class="text-xl font-semibold mb-2">Your circle is empty</h3>
              <p class="text-muted-foreground mb-6 max-w-md mx-auto">
                Start building your personal board by adding advisors who can
                help you achieve your goals.
              </p>
              <Button class="bg-tribe-600 hover:bg-tribe-700">
                <a href="/discover">Discover Advisors</a>
              </Button>
            </div>
          {/if}
        </TabsContent>

        <TabsContent value="sessions">
          <div class="mb-8">
            <h2 class="text-2xl font-semibold mb-1">Upcoming Sessions</h2>
            <p class="text-muted-foreground">
              Your scheduled meetings with advisors
            </p>
          </div>

          {#if upcomingSessions.length > 0}
            <div class="space-y-4">
              {#each upcomingSessions as session (session.id)}
                <Card>
                  <CardContent class="p-6">
                    <div
                      class="flex flex-col md:flex-row gap-4 md:items-center justify-between"
                    >
                      <div class="flex items-center gap-4">
                        <Avatar>
                          <AvatarImage
                            src={session.advisorImage}
                            alt={session.advisorName}
                          />
                          <AvatarFallback
                            >{session.advisorName
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}</AvatarFallback
                          >
                        </Avatar>
                        <div>
                          <h3 class="font-semibold">{session.advisorName}</h3>
                          <p class="text-muted-foreground text-sm">
                            {session.topic}
                          </p>
                        </div>
                      </div>

                      <div class="flex items-center gap-8">
                        <div>
                          <div class="text-sm font-medium">{session.date}</div>
                          <div class="text-sm text-muted-foreground">
                            {session.time}
                          </div>
                        </div>

                        <div class="flex gap-2">
                          <Button variant="outline" size="sm">Reschedule</Button
                          >
                          <Button size="sm">Join</Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              {/each}
            </div>
          {:else}
            <div class="text-center py-12 border rounded-lg bg-muted/20">
              <div
                class="mx-auto w-20 h-20 flex items-center justify-center rounded-full bg-muted mb-4"
              >
                <Calendar class="h-10 w-10 text-muted-foreground/50" />
              </div>
              <h3 class="text-xl font-semibold mb-2">No upcoming sessions</h3>
              <p class="text-muted-foreground mb-6 max-w-md mx-auto">
                Schedule sessions with your advisors to get personalized
                guidance and feedback.
              </p>
            </div>
          {/if}
        </TabsContent>

        <TabsContent value="activity">
          <div class="mb-8">
            <h2 class="text-2xl font-semibold mb-1">Recent Activity</h2>
            <p class="text-muted-foreground">Latest updates from your circle</p>
          </div>

          <div class="space-y-4">
            {#each recentActivity as activity (activity.id)}
              <Card>
                <CardContent class="p-4">
                  <div class="flex gap-4">
                    <Avatar>
                      <AvatarImage
                        src={activity.advisorImage}
                        alt={activity.advisorName}
                      />
                      <AvatarFallback
                        >{activity.advisorName
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}</AvatarFallback
                      >
                    </Avatar>
                    <div class="flex-1">
                      <div class="flex justify-between">
                        <span class="font-medium">{activity.advisorName}</span>
                        <span class="text-sm text-muted-foreground"
                          >{activity.time}</span
                        >
                      </div>
                      <p class="text-muted-foreground">{activity.content}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            {/each}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  </main>
</div>
