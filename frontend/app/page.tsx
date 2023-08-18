'use client'
import "./globals.css";
import Homepage from "@/components/Homepage";
import Welcome from "@/components/Homepage/Welcome";

export default function Home() {
  return (
    <main>

        <Homepage>
          <Welcome />
        </Homepage>
     
    </main>
  );
}
