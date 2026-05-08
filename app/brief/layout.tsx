import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brief · Laura Valentina",
  robots: { index: false, follow: false },
};

export default function BriefLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
