"use client";

import React, { useEffect, useRef } from "react";
import SignaturePad from "signature_pad";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const Signature = ({ label, onSave }: { label: string; onSave: (dataUrl: string) => void }) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const sigPadRef = useRef<SignaturePad | null>(null);
    const onSaveRef = useRef(onSave);

    useEffect(() => {
        onSaveRef.current = onSave;
    }, [onSave]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const pad = new SignaturePad(canvas, {
            backgroundColor: "rgb(255,255,255)",
        });
        sigPadRef.current = pad;

        const syncFromPad = () => {
            if (pad.isEmpty()) {
                onSaveRef.current("");
            } else {
                onSaveRef.current(pad.toDataURL("image/png"));
            }
        };

        pad.addEventListener("endStroke", syncFromPad);

        return () => {
            pad.removeEventListener("endStroke", syncFromPad);
            sigPadRef.current = null;
        };
    }, []);

    const handleClear = () => {
        sigPadRef.current?.clear();
        onSave("");
    };

    return (
        <div className="mt-4 flex w-full flex-col items-center">
            <Label>{label}</Label>
            <canvas ref={canvasRef} width={300} height={200} className="rounded border bg-white" />
            <div className="mt-2 flex gap-2">
                <Button type="button" onClick={handleClear} className="bg-red-500 hover:bg-red-600">
                    Effacer
                </Button>
            </div>
        </div>
    );
};

export default Signature;
