import { NextResponse } from 'next/server';

export async function POST(request: Request) {

  try {
    const body = await request.json();
    const { nombre, correo, numero, mensaje } = body;

    if (!nombre || !correo || !numero || !mensaje) {
      return NextResponse.json(
        { error: 'Todos los campos son requeridos' },
        { status: 400 }
      );
    }

    const WORDPRESS_URL = process.env.WORDPRESS_API_URL; 


    const response = await fetch(WORDPRESS_URL!, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',        
      },
      body: JSON.stringify({
        nombre,
        correo,
        numero,
        mensaje
      })
    });

    if (!response.ok) {
      throw new Error('Error al conectar con WordPress');
    }

    const data = await response.json();

    return NextResponse.json(
      { success: true, data },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Error al procesar la solicitud' },
      { status: 500 }
    );
  }
}