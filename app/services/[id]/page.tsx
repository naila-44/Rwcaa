import ServiceDetails from "@/components/services/ServiceDetails";

export default function ServiceDetailsPage({ params }: { params: { id: string } }) {
  return <ServiceDetails id={params.id} />;
}
