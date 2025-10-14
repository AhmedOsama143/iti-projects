/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable ISR (Incremental Site Regeneration)
  experimental: {
    // Enable ISR features
    revalidateTag: true,
    revalidatePath: true,
  },
};

export default nextConfig;
