interface RoomVisual {
    structure(x: number, y: number, type: string, opts?: { opacity?: number });
    connectRoads(opts?: { opacity?: number, color?: string });
    animatedPosition(x: number, y: number, opts?: { color?: string, opacity?: number, radius?: number, frames: number });
    speech(text: string, x: number, y: number, opts?: { background?: string, textcolor?: string, textstyle?: string, textsize?: number, textfont?: string, opacity?: number });
}