import TeamMemberClient from "@/components/TeamMemberClient";
import { teamMembers } from "@/lib/team";
import { motion } from "framer-motion";
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
    console.log(member)
    return(
        <TeamMemberClient member={member}/>
    )
}