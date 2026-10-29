import { notFound } from "next/navigation";
import { PROPERTIES } from "@/data/properties";
import DevelopmentDetailClient from "./DevelopmentDetailClient";

export function generateStaticParams() {
  return PROPERTIES.map((property) => ({
    slug: property.slug,
  }));
}

export default async function DevelopmentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const property = PROPERTIES.find((p) => p.slug === slug);

  if (!property) {
    notFound();
  }

  const related = PROPERTIES.filter((p) => p.id !== property.id).slice(0, 2);

  return <DevelopmentDetailClient property={property} related={related} />;
}
