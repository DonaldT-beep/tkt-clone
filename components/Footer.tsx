export default function Footer() {
  return (
    <footer className="text-center py-6 mt-12 border-t">
      <p className="text-sm text-gray-600">
        &copy; {new Date().getFullYear()} TKT. All rights reserved.
      </p>
    </footer>
  );
}
