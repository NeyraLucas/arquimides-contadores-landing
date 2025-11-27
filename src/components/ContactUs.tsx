import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

function ContactUs() {
    const form = useRef<HTMLFormElement>(null);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        if (form.current) {
            emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
                .then((result) => {
                    console.log(result.text);
                    Swal.fire({
                        title: '¡Mensaje Enviado!',
                        text: 'Gracias por contactarnos. Nos pondremos en contacto contigo pronto.',
                        icon: 'success',
                        confirmButtonColor: '#B8530A',
                        background: '#001020',
                        color: '#ffffff'
                    });
                    setFormData({ name: '', email: '', phone: '', message: '' });
                }, (error) => {
                    console.log(error.text);
                    Swal.fire({
                        title: 'Error',
                        text: 'Hubo un error al enviar el mensaje. Por favor intenta nuevamente.',
                        icon: 'error',
                        confirmButtonColor: '#B8530A',
                        background: '#001020',
                        color: '#ffffff'
                    });
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    };

    return (
        <section>
            <div className="container mx-auto max-w-4xl">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50">Contáctanos</h3>
                <p className="text-slate-600 dark:text-slate-400">Envíanos un mensaje y uno de nuestros expertos se pondrá en contacto contigo a la brevedad.</p>
                <form ref={form} onSubmit={handleSubmit} className="space-y-6 py-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                            Nombre Completo
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-[var(--secondary-color)] focus:ring-1 focus:ring-[var(--secondary-color)] transition-colors"
                            placeholder="Tu nombre"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                            Correo Electrónico
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-[var(--secondary-color)] focus:ring-1 focus:ring-[var(--secondary-color)] transition-colors"
                            placeholder="tu@email.com"
                        />
                    </div>

                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                            Teléfono
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-[var(--secondary-color)] focus:ring-1 focus:ring-[var(--secondary-color)] transition-colors"
                            placeholder="+52 123 456 7890"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                            Mensaje
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={5}
                            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-[var(--secondary-color)] focus:ring-1 focus:ring-[var(--secondary-color)] transition-colors resize-none"
                            placeholder="¿En qué podemos ayudarte?"
                        ></textarea>
                    </div>

                    <div className="text-center pt-2">
                        <button
                            type="submit"
                            disabled={loading}
                            className={`inline-flex items-center justify-center w-full px-8 py-4 bg-[var(--secondary-color)] text-white font-bold rounded-lg hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-lg ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            {loading ? 'Enviando...' : 'Enviar Mensaje'}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default ContactUs;
