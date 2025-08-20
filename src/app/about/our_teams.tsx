'use client';

import Image from 'next/image';
import Link from 'next/link';
import ourTeamsData, { type TeamSection } from './our_teams_Data';
import { FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Section config
const sections: { key: TeamSection; title: string }[] = [
  { key: 'founders', title: 'Founders' },
  { key: 'co-founders', title: 'Co-Founders' },
  { key: 'heads', title: 'Heads of Departments' },
];

// Helpers for centered layout depending on count
const containerWidth = (count: number) => {
  if (count <= 1) return 'max-w-sm';
  if (count === 2) return 'max-w-3xl';
  if (count === 3) return 'max-w-5xl';
  return 'max-w-6xl';
};

const gridCols = (count: number) => {
  if (count <= 1) return 'grid-cols-1';
  if (count === 2) return 'grid-cols-1 sm:grid-cols-2';
  if (count === 3) return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';
  return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4';
};

const initials = (name: string) =>
  name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join('');

export default function Our_Teams() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: 'linear',
      offset: 50,
      once: true,
    });
  }, []);

  return (
    <section className="w-full min-h-screen px-2 mt-20 sm:px-4 md:px-8">
      <h1 className="text-white text-center text-[clamp(2rem,6vw,58px)] font-semibold">
        Our Teams
      </h1>

      {sections.map(({ key, title }) => {
        const members = ourTeamsData.filter((m) => m.section === key);

        return (
          <div
            key={key}
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="mt-12"
          >
            {/* Section heading */}
            <h2
              className="text-center my-10 text-3xl sm:text-3xl md:text-4xl text-[#9eff00] underline font-semibold"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
              data-aos-delay="100"
            >
              {title}
            </h2>

            {/* Cards: GRID (wrap to next line), centered, with gaps */}
            <div
              className={[
                'mx-auto mt-6 grid gap-6 md:gap-8 justify-items-center items-start',
                containerWidth(members.length),
                gridCols(members.length),
              ].join(' ')}
            >
              {members.map((member, idx) => (
                <div
                  key={member.name}
                  className="w-full max-w-[280px] rounded-xl border border-[#232323] p-6 sm:p-7 flex flex-col items-center text-center gap-4 bg-[#0b0b0b]/40"
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                  data-aos-delay={Math.min(idx * 120, 480)}
                >
                  {/* Avatar — only for Founders */}
                  {member.section === 'founders' && (
                    <div className="relative h-28 w-28 sm:h-32 sm:w-32 rounded-full overflow-hidden bg-[#0d0d0d] ring-1 ring-[#232323] hover:ring-[#9EFF00]/40 transition-all duration-300">
                      {member.image ? (
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          sizes="128px"
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <span className="text-white text-2xl font-bold">
                            {initials(member.name)}
                          </span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Name + Designation */}
                  <div className="space-y-1">
                    <h3 className="text-white font-semibold text-lg sm:text-xl">
                      {member.name}
                    </h3>
                    <p className="text-[#9EFF00] font-medium text-xs sm:text-sm uppercase tracking-wide">
                      {member.designation}
                    </p>
                  </div>

                  {/* Bio */}
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Socials centered */}
                  {(member.socials?.linkedin ||
                    member.socials?.twitter ||
                    member.socials?.instagram) && (
                    <div className="flex items-center justify-center gap-4 mt-2">
                      {member.socials?.linkedin && (
                        <Link
                          href={member.socials.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.name} on LinkedIn`}
                          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#232323] text-white hover:text-[#9EFF00] hover:border-[#9EFF00] transition-colors"
                        >
                          <FaLinkedinIn className="h-4 w-4" />
                          <span className="sr-only">LinkedIn</span>
                        </Link>
                      )}
                      {member.socials?.twitter && (
                        <Link
                          href={member.socials.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.name} on Twitter`}
                          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#232323] text-white hover:text-[#9EFF00] hover:border-[#9EFF00] transition-colors"
                        >
                          <FaTwitter className="h-4 w-4" />
                          <span className="sr-only">Twitter</span>
                        </Link>
                      )}
                      {member.socials?.instagram && (
                        <Link
                          href={member.socials.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.name} on Instagram`}
                          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#232323] text-white hover:text-[#9EFF00] hover:border-[#9EFF00] transition-colors"
                        >
                          <FaInstagram className="h-4 w-4" />
                          <span className="sr-only">Instagram</span>
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              ))}

              {/* Empty state */}
              {members.length === 0 && (
                <div
                  className="col-span-full text-center text-gray-400 italic py-10"
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                >
                  Coming soon
                </div>
              )}
            </div>
          </div>
        );
      })}
    </section>
  );
}