import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm mb-2">
          &copy; {new Date().getFullYear()} Blog Viewer. All Rights Reserved.
        </p>
        <p className="text-xs mt-2">
          Built with using Next.js and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
