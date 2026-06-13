"use client";

import {
  useEffect,
  useState,
} from "react";
import Image from "next/image";
import Link from "next/link";
type User = {
  name: string;
  avatar: string;
  email: string;
  phone: string;
  profession: string;
  provider: string;
};

export default function ProfilePage() {
  const [user, setUser] =
    useState<User | null>(null);

  useEffect(() => {
    const loadProfile =
      async () => {
        const res =
          await fetch(
            "/api/profile"
          );

        const data =
          await res.json();

        setUser(data.user);
      };

    loadProfile();
  }, []);

  if (!user)
    return <div>Loading...</div>;

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">
        My Profile
      </h1>

      <div>
        <Image src={user.avatar} alt={user.name} width={100} height={100} className="rounded-full" />
      </div>

      <div>
        Name: {user.name}
      </div>

      <div>
        Email: {user.email}
      </div>

      <div>
        Phone: {user.phone}
      </div>

      <div>
        Profession:
        {user.profession}
      </div>

      <div>
        Provider:
        {user.provider}
        <ul>
            <li>
                <Link href="/api/auth/social?provider=google">Connect Google</Link>
            </li>

            <li>
                <Link href="/api/auth/social?provider=github">Connect Github</Link>
            </li>

            <li>
                <Link href="/api/auth/social?provider=facebook">Connect Facebook</Link>
            </li>

            <li>
                <Link href="/api/auth/social?provider=linkedin">Connect Linkedin</Link>
            </li>

            <li>
                <Link href="/api/auth/social?provider=instagram">Connect Instagram</Link>
            </li>

        </ul>

      </div>

    </div>
  );
}