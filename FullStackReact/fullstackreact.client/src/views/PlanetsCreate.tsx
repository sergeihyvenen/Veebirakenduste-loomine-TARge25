import { useState } from "react";

type FormState = {
    id: string;
    name: string;
    description: string;
    type: string;
    mass: string;
};

export default function PlanetsCreate() {
    const [form, setForm] = useState<FormState>({
        id: "",
        name: "",
        description: "",
        type: "",
        mass: ""
    });

    const [saving, setSaving] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const onChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            setSaving(true);
            setError(null);

            const payload = {
                name: form.name,
                description: form.description || null,
                type: form.type || null,
                mass: form.mass ? Number(form.mass) : null
            };

            const res = await fetch("/api/planets", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            });

            if (!res.ok) {
                throw new Error("Failed to create planet");
            }

            const result = await res.json();
            console.log("Planet created:", result);

            setForm({
                id: "",
                name: "",
                description: "",
                type: "",
                mass: ""
            });

        } catch (err: unknown) {
            setError(err instanceof Error ? err.message : "Error creating planet");
        } finally {
            setSaving(false);
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <h1>Create Planet</h1>

            {error && <p>{error}</p>}

            <input
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={onChange}
            />

            <input
                name="description"
                placeholder="Description"
                value={form.description}
                onChange={onChange}
            />

            <input
                name="type"
                placeholder="Type"
                value={form.type}
                onChange={onChange}
            />

            <input
                name="mass"
                placeholder="Mass"
                value={form.mass}
                onChange={onChange}
            />

            <button type="submit" disabled={saving}>
                {saving ? "Saving..." : "Create"}
            </button>
        </form>
    );
}