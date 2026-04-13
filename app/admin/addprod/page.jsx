//"4867071fc8e5a6cc508ee9ba5b1df35a"
"use client";

import { useState } from "react";
import { db } from "../../../lib/firebase";
import { collection, addDoc } from "firebase/firestore";

export default function AddProductForm() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [images, setImages] = useState([]); // 
  const [loading, setLoading] = useState(false);

  // 🔹 Upload to ImgBB
  const uploadToImgBB = async (file) => {
    const apiKey ="4867071fc8e5a6cc508ee9ba5b1df35a"; // 

    const formData = new FormData();
    formData.append("image", file);

    const response = await fetch(
      `https://api.imgbb.com/1/upload?key=${apiKey}`,
      {
        method: "POST",
        body: formData,
      }
    );

    const result = await response.json();

    if (!result.success) {
      throw new Error("Image upload failed");
    }

    return result.data.url;
  };

  // 🔹 Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (!images.length) {
        alert("Please select at least one image");
        return;
      }

      // ✅ upload multiple images
      const imageUrls = await Promise.all(
        images.map((file) => uploadToImgBB(file))
      );

      // ✅ save to Firestore
      await addDoc(collection(db, "products"), {
        title,
        price: Number(price),
        quantity: Number(quantity),
        images: imageUrls,
        createdAt: new Date(),
      });

      alert("✅ Product added successfully!");

      // reset form
      setTitle("");
      setPrice("");
      setQuantity("");
      setImages([]);

    } catch (error) {
      console.error(error);
      alert("❌ Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 flex flex-col gap-4 bg-white shadow rounded-xl"
    >
      <h2 className="text-xl font-semibold">Add Product</h2>

      <input
        type="text"
        placeholder="Product Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className="border p-2 rounded"
      />

      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
        className="border p-2 rounded"
      />

      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        required
        className="border p-2 rounded"
      />

      {/* ✅ FIXED MULTIPLE IMAGE INPUT */}
      <input
        type="file"
        multiple
        onChange={(e) => setImages(Array.from(e.target.files))}
        className="border p-2 rounded"
      />

      {/* ✅ IMAGE PREVIEW */}
      <div className="flex gap-2 flex-wrap">
        {images.map((file, index) => (
          <img
            key={index}
            src={URL.createObjectURL(file)}
            alt="preview"
            className="w-20 h-20 object-cover rounded"
          />
        ))}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="bg-black text-white py-2 rounded hover:opacity-80 disabled:opacity-50"
      >
        {loading ? "Uploading..." : "Add Product"}
      </button>
    </form>
  );
}