"use client"
import React, { useRef, useEffect, useState } from 'react';
import SignaturePad from "signature_pad";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";



const Signature = ({ label, onSave }: { label: string; onSave: (dataUrl: string) => void }) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const sigPadRef = useRef<SignaturePad | null>(null);
    const [isSaved, setIsSaved] = useState(false);

    useEffect(() => {
        if (canvasRef.current) {
            sigPadRef.current = new SignaturePad(canvasRef.current, {
                backgroundColor: "rgb(255,255,255)",
            });
        }
    }, []);

    const handleClear = () => {
        sigPadRef.current?.clear();
        setIsSaved(false); // réaffiche le bouton si on efface
        onSave("");
    }

    const handleSave = () => {
        if (sigPadRef.current && !sigPadRef.current.isEmpty()) {
            const dataUrl = sigPadRef.current.toDataURL("image/png");
            onSave(dataUrl);
            setIsSaved(true); // masque le bouton après sauvegarde
        }
    };
    return (
        <div className="flex flex-col items-center w-full mt-4">
            <Label>{label}</Label>
            <canvas ref={canvasRef} width={300} height={200} className="border rounded bg-white" />
            <div className="flex gap-2 mt-2">
                {!isSaved && <Button type="button" onClick={handleSave} className="bg-green-500 hover:bg-green-600">
                    Sauvegarder
                </Button>}
                <Button type="button" onClick={handleClear} className="bg-red-500 hover:bg-red-600">
                    Effacer
                </Button>
            </div>
        </div>
    )
}

export default Signature