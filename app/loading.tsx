import Image from 'next/image';

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-50 via-neutral-100 to-neutral-200 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-800">
      <div className="text-center">
        <div className="relative w-32 h-32 mx-auto mb-8 animate-pulse">
          <Image
            src="/images/logo.png"
            alt="Tressora Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
          Tressora
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400">
          Preparing your transformation experience...
        </p>
      </div>
    </div>
  );
}
