import TeamMemberClient from "@/components/TeamMemberClient";
import { teamMembers } from "@/lib/team";
import { notFound } from "next/navigation";
type PageProps ={
    params : Promise<{
        slug: string;
    }>;
};
export default async function TeamMemberPage({ params }: PageProps){
    const slug = (await params).slug;
    const member = teamMembers.find((m)=>m.slug === slug);
    if (!member) {
        notFound();
    }
    return(
        <TeamMemberClient member={member}/>
    )
}