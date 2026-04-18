"use client";

export default function ThankYouPage() {
  const phone = "919746991907";

  const message = "Hi, I visited your prototype website. Here is my feedback:";
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <div className="h-screen flex flex-col justify-center items-center text-center p-6">
      <h1 className="text-3xl font-bold mb-4">
        Thank you for visiting 🙌
      </h1>

      <p className="mb-6 text-gray-600">
        I’d love to hear your feedback to improve this prototype.
      </p>

      <a
        href={whatsappUrl}
        target="_blank"
        className="bg-green-500 text-white px-6 py-3 rounded-xl hover:bg-green-600"
      >
        Send Feedback on WhatsApp
      </a>
    </div>
  );
}