export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-700 bg-[#070D1B] text-white text-center py-6">
      <p className="text-sm sm:text-base">
        &copy; {new Date().getFullYear()} Designed by Naveen. All right reserved.
      </p>
    </footer>
  );
}