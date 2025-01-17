import { useState } from "react";

const Registration = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        category: "Student",
        paymentMethod: "Credit Card",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you for registering, ${formData.name}!`);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-800 text-white flex items-center justify-center font-sans">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 p-6">
                {/* Registration Form */}
                <div className="bg-gray-900 p-8 rounded-lg shadow-xl border border-gray-700">
                    <h2 className="text-4xl font-extrabold text-teal-400 mb-6 uppercase tracking-wider">
                        TechFest Registration
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label className="block text-sm font-medium mb-2 uppercase">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2 uppercase">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2 uppercase">
                                Category
                            </label>
                            <select
                                name="category"
                                value={formData.category}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
                            >
                                <option value="Student">Student</option>
                                <option value="Academic">Academic</option>
                                <option value="Professional">Professional</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2 uppercase">
                                Payment Method
                            </label>
                            <select
                                name="paymentMethod"
                                value={formData.paymentMethod}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
                            >
                                <option value="Credit Card">Credit Card</option>
                                <option value="Debit Card">Debit Card</option>
                                <option value="PayPal">PayPal</option>
                                <option value="Net Banking">Net Banking</option>
                            </select>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-teal-500 text-black font-bold py-3 rounded-lg hover:bg-teal-600 transition duration-300 uppercase tracking-wider"
                        >
                            Register Now
                        </button>
                    </form>
                </div>

                {/* Information Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-900 p-6 rounded-lg shadow-xl border border-gray-700">
                        <h3 className="text-xl font-semibold text-teal-400 mb-3 uppercase tracking-wider">
                            Registration Categories
                        </h3>
                        <p className="text-gray-400">
                            <strong>Students:</strong> Special discounted rates.
                            <br />
                            <strong>Academicians:</strong> Engage with experts in the field.
                            <br />
                            <strong>Professionals:</strong> Expand your network and explore advancements.
                        </p>
                    </div>
                    <div className="bg-gray-900 p-6 rounded-lg shadow-xl border border-gray-700">
                        <h3 className="text-xl font-semibold text-teal-400 mb-3 uppercase tracking-wider">
                            How to Register
                        </h3>
                        <ul className="list-disc pl-5 text-gray-400">
                            <li>Complete the online registration form.</li>
                            <li>Make the payment via the chosen method.</li>
                        </ul>
                    </div>
                    <div className="bg-gray-900 p-6 rounded-lg shadow-xl border border-gray-700">
                        <h3 className="text-xl font-semibold text-teal-400 mb-3 uppercase tracking-wider">
                            What's Included
                        </h3>
                        <ul className="list-disc pl-5 text-gray-400">
                            <li>Access to all keynote sessions and workshops.</li>
                            <li>Symposium materials (souvenirs, handouts, and digital resources).</li>
                            <li>Certificate of participation.</li>
                        </ul>
                    </div>
                    <div className="bg-gray-900 p-6 rounded-lg shadow-xl border border-gray-700">
                        <h3 className="text-xl font-semibold text-teal-400 mb-3 uppercase tracking-wider">
                            Registration Deadline
                        </h3>
                        <p className="text-gray-400">
                            Final deadline: <strong>31st January 2025</strong>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;
