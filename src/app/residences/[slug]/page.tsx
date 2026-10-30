import { notFound } from "next/navigation";
import { RESIDENCES, getResidenceBySlug } from "@/data/residences";
import ResidenceDetailClient from "./ResidenceDetailClient";
import type { Metadata } from "next";

export function generateStaticParams() {
  return RESIDENCES.map((res) => ({
    slug: res.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const residence = getResidenceBySlug(slug);

  if (!residence) {
    return {
      title: "Residence Not Found | WAYSTAR",
    };
  }

  return {
    title: `${residence.name} | WAYSTAR Exceptional Residences`,
    description: `${residence.tagline}. Located in ${residence.location}, ${residence.city}.`,
  };
}

export default async function ResidencePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const residence = getResidenceBySlug(slug);

  if (!residence) {
    notFound();
  }

  return <ResidenceDetailClient residence={residence} />;
}

