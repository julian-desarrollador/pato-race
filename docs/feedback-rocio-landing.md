# Feedback Rocío — Landing Pato Race 2026

**Fecha:** 28–29 ago 2026  
**Contexto:** Respuesta de Rocío al mensaje de Julián (header, idioma, pagos). Brief largo de producto, copy, UX, legal y merch.

**Cómo usamos este doc:** fuente de verdad. Actualizar acá si ella manda cambios. Ejecutar **una fase por vez** → preview → validar con ella → siguiente fase.

---

## Decisiones cerradas

| Tema | Decisión |
|------|----------|
| Precio ARS | **$10.000** |
| Precio USD | **$12** (sigue; las Bases/T&C hablan de pesos — pendiente confirmar internacional) |
| Fecha | **22 de noviembre 2026** |
| Lugar | **Dique 3 · Puerto Madero · Buenos Aires** |
| Horario evento (provisorio) | **APERTURA 19:00 · CARRERA + EXPERIENCIA EN VIVO** (art. 2: horarios definitivos se comunican después) |
| Cierre de ventas | **22 de noviembre 2026 a las 19:00** |
| Apertura de ventas | Aprox. **20/09** — fecha exacta pendiente |
| Beneficio social | **70%**: Garrahan **60%**, Fundación Carlos Gardel **5%**, Hospital de Niños Dr. Debilio Blanco Villegas de Tandil **5%** |
| Operación | **30%** órdenes de compra (premios, producción, organización, tecnología, servicios, seguridad, logística, comunicación, medios de pago, impuestos y demás costos) |
| Premios | **2%** de la recaudación computable de participaciones, **después** de comisiones impositivas y bancarias. Vive dentro del 30%, no suma 72%. |
| Organizador | PATO RACE SOLIDARIO S.R.L., Rocío Bustamante y Luis Ortiz. CUIT **30-71952790-2**. Juncal 2061, piso 9° A, CABA |
| Edad | Titulares con derecho a premio: **18+** o personas jurídicas |
| CTA principal | **ADOPTÁ TU PATO · $10.000** + “Participá desde cualquier lugar del país” |
| Vocabulario | **Participaciones** (no “patos adoptados”) |
| EN VIVO | Sin meta en $; “Esta carrera la hacemos entre todos”; recaudado + participaciones + % del objetivo |
| Sponsors | Sin membresías/tiers; logos + CTA alianzas |
| Mercado Pago en body | No destacar salvo alianza comercial |
| Idioma en web | Solo selector de idioma (sin menú de moneda en UI, por ahora) |

---

## Pendientes de Rocío / bloqueados

- [ ] Horarios definitivos del evento (si la apertura 19:00 queda)
- [ ] Fecha exacta de apertura de ventas (aprox. 20/09)
- [ ] Video teaser 15–25 s
- [ ] Partner Deck (PDF o link) para sponsors
- [x] Bases publicadas (arts. 1–7 y 9–31; no hay art. 8)
- [x] T&C del sitio publicados (1–10 y 12–14; no hay art. 11; art. 14 cortado tal cual)
- [x] CUIT, domicilio, Rocío Bustamante y Luis Ortiz
- [x] Edad: 18+ / persona jurídica
- [ ] Promesa de “seguir en vivo” — no prometer hasta cerrarlo
- [ ] Merch / tienda: en la propuesta es **módulo opcional ARS 90.000** (catálogo, carrito, Mercado Pago, gestión básica). Misma web (desarrollo propio). Forma de pago 50% al iniciar / 50% al entregar. **Andreani y logística dinámica quedan fuera** de esos $90.000 (cotizar aparte si lo piden). Hoy: vitrina + retiro en evento; falta ok comercial + fotos, precios, stock, talles
- [ ] Nombres de gente importante / artistas en la franja de experiencia
- [ ] Confirmación MP en pesos vs cobro USD afuera (Stripe) — T&C dicen precios al consumidor en ARS; USD $12 sigue hasta que cierre
- [x] Políticas de cambios/devoluciones — página publicada como resumen de Bases §§14, 24–26 y T&C §§7–8, 10 (sin inventar plazos; si ella manda texto propio, reemplazar)
- [ ] Pixel / Analytics: si se agregan, ahí sí CMP de cookies

---

## Fases

### Fase 0 — Brief (este documento)

- [x] Bajar y ordenar el mensaje de Rocío
- [x] Anclar decisiones cerradas
- [x] Marcar pendientes / bloqueados
- [x] Checklist por fase

**Estado:** hecho. No toca UI.

---

### Fase 1 — Datos + copy home (ES/EN)

**Objetivo validable:** precio, fecha, %, textos principales y EN VIVO alineados al brief.

**Archivos:**

- `src/lib/campaign.ts`
- `src/lib/i18n/messages.ts`
- `src/components/landing-page.tsx`
- `src/components/stats-dashboard.tsx`
- (y lo que lea precios/fecha/beneficiarios)

**Checklist**

- [x] `ticketPrice` → 15000; `ticketPriceUsd` → 12
- [x] Fecha → 22 nov 2026; chip hero: ciudad / fecha / apertura 19:00 (provisorio)
- [x] Beneficiarios y % (60 / 5 / 5) + bloque 2% premios + resto producción
- [x] Hero: tagline “LA CARRERA SOLIDARIA…”, bullets de valor, CTA $15.000 + “Participá desde cualquier lugar…”
- [x] Contexto de precio: “CON $15.000 YA SOS PARTE DE LA CARRERA”
- [x] Countdown: mantener “faltan X días” + sumar “Las adopciones ya están abiertas” (participaciones reales después)
- [x] EN VIVO: sin meta en $; copy “esta carrera la hacemos entre todos”; “XXXX participaciones adoptadas”; barra “XX% DEL OBJETIVO”
- [x] Qué es: copy nuevo; “ADOPTÁ TU PATO”; “UN PATO · MÚLTIPLES PARTICIPACIONES”; premio sin $ fijo
- [x] Sponsors (copy): “Marcas que hacen posible la carrera” / “Las marcas también corren por una causa” (sin tiers)
- [x] Beneficio: 70% + lista; 2% premios; resto producción
- [x] “Meta ambiciosa” → “Argentina corre junta”
- [x] Cómo participar: 4 pasos con copy nuevo (sin Mercado Pago en cuerpo)
- [x] Bloque “Estés donde estés, tu pato corre”
- [x] FAQ home: 8 visibles + “Ver todas” (respuestas del brief; cautela en “en vivo” y menores)
- [x] CTA final + línea “Tu pato corre por vos / Vos corrés por ellos” en algún lado
- [x] Traducción EN de todo lo tocado
- [x] Variar “evento solidario” → impacto social / a beneficio / propósito / causa (no repetir siempre lo mismo)

**Estado:** hecha. Pendiente de validar con Rocío en preview.

**Fuera de esta fase:** menú mobile, sticky CTA, merch, legal pages, video, página sponsors.

---

### Fase 2 — Mobile UX

**Objetivo validable:** navegar la home en celu sin perder el CTA.

**Checklist**

- [x] Menú mobile: Evento, Cómo participar, Beneficiarios, Sponsors, Preguntas, Contacto (+ Merch cuando exista Fase 5)
- [x] CTA sticky inferior: `ADOPTÁ TU PATO · $15.000`
- [x] Header actual (logo + idioma + CTA) convive con el menú
- [x] Verificar contraste / no solape con sticky

---

### Fase 3 — Transparencia + narrativa corta

**Checklist**

- [x] Bloque “UNA CARRERA TRANSPARENTE” + 4 sellos (Beneficiarios oficiales, Pago seguro, Asignación aleatoria, Recaudación en vivo)
- [x] Reforzar “Tu pato corre por vos. Vos corrés por ellos.”
- [x] Recortar ~25–30% longitud: más tarjetas/íconos, menos párrafos
- [x] Franja visual de experiencia (carrera · música · DJ · etc.) — nombres importantes cuando ella los pase
- [x] Mejorar contraste texto gris sobre azul oscuro

---

### Fase 4 — Sponsors

**Checklist**

- [x] Quitar membresías/tiers
- [x] Grilla de logos
- [x] CTA “Conocé las alianzas” → página `/sponsors` o descarga Partner Deck
- [x] Formulario / contacto sponsor (no WhatsApp suelto)
- [x] Bloqueado hasta tener logos / deck — **hueco visible “falta logo / Partner Deck”**

---

### Fase 5 — Merch

**Checklist**

- [x] Sección “Llevate un pedacito de la carrera” / “Pato Race también se usa”
- [x] Productos: remeras, gorras, stickers (copy del brief)
- [x] “Merch oficial · stock limitado”
- [x] Retiro en evento vs envíos: solo copy provisorio hasta cerrar logística
- [x] Bloqueado sin fotos/stock — **hueco visible “falta foto de producto”**

---

### Fase 6 — Legal / footer

**Checklist**

- [x] Footer 3 columnas desktop + acordeón mobile
- [x] Columnas: marca/evento · Información · Legal · Contacto
- [x] Links: T&C, privacidad, cookies, bases, cambios/devoluciones, botón de arrepentimiento
- [x] Email: patorace.solidario@gmail.com
- [x] © 2026 + disclaimers cortos
- [x] CUIT / razón social / Bustamante & Ortiz en footer
- [x] Páginas legales con Bases, T&C, privacidad, cookies, arrepentimiento y cambios/devoluciones
- [x] Organiza: PATO RACE SOLIDARIO S.R.L. + contacto institucional / prensa / sponsors
- [x] Bloque “¿Dónde es?” (mapa, cómo llegar) — hueco de mapa
- [x] Botón de arrepentimiento visible en primera pantalla: nav desktop + sticky mobile + menú + footer (sin banda gritada arriba del logo)

---

### Fase 7 — Video + polish + post-compra

**Checklist**

- [x] Teaser 15–25 s en el primer tercio (cuando exista asset) — **hueco visible**
- [x] Fotos / render — huecos de merch / experiencia
- [x] Después del checkout: “Ya tenés tu pato” + compartir WhatsApp / Instagram con texto sugerido
- [x] Contador social tipo “12.486 participaciones” cuando haya volumen real — el tablero ya muestra participaciones reales

---

## FAQ (contenido de referencia)

### Home (8 + Ver todas)

1. ¿Puedo participar sin ir?
2. ¿Cómo se asigna mi pato?
3. ¿Necesito estar presente para ganar?
4. ¿Qué incluye mi participación?
5. ¿Cuánto es el premio?
6. ¿A dónde va el dinero?
7. ¿Qué pasa si llueve?
8. ¿Puedo comprar más de una participación?

→ **Ver todas las preguntas**

### Respuestas clave (usar en Fase 1 / página FAQ)

- **Sin ir al Dique 3:** Sí, online; seguir novedades por canales oficiales. *No prometer “en vivo” hasta cerrarlo.*
- **Asignación:** Número único; vinculación antes de la carrera según Bases; se informa qué pato corre.
- **Compartir un pato:** Un pato · múltiples participaciones; cantidad/procedimiento en Bases. *Sacar “20–30”.*
- **Si gana:** Premio según Bases; si hay varias participaciones, se reparte según metodología previa.
- **Cuánto es el premio:** Crece con la carrera; 2% de la recaudación de participaciones a premios. *Sin $500.000 fijo.*
- **¿Presente para ganar?** No.
- **¿Más de una participación?** Sí.
- **Qué incluye:** Número único + asignación. *No incluye pato físico.*
- **¿Me llevo el pato?** No; son de producción, reutilizados (ambiente). Coleccionables = merch aparte.
- **A dónde va el dinero / beneficiarios:** 70% a Garrahan, Gardel, Hospital de Niños de Tandil (detalle %); transparencia pública.
- **Lluvia / reprogramación:** Puede haber cambios; participación válida en nueva fecha.
- **Menores:** Acompañados; detalle jurídico pendiente.
- **Merch sin participar / retiro:** Sí se puede comprar merch aparte; métodos de entrega a indicar.
- **Sponsor:** Alianzas → Partner Deck / formulario.
- **Transparencia de fondos:** Comunicación pública de distribución.

---

## Copy clave (snippets)

**Hero / marca**

- PATO RACE 2026  
- LA CARRERA SOLIDARIA DE PATOS MÁS GRANDE DE ARGENTINA  
- Miles de patos. Una carrera sobre el agua. Una experiencia en Puerto Madero. 70% destinado a causas solidarias.

**Chip evento**

- BUENOS AIRES  
- 22 NOVIEMBRE 2026  
- DIQUE 3 · PUERTO MADERO  
- APERTURA 19:00 · CARRERA + EXPERIENCIA EN VIVO *(cuando cierren horarios)*

**CTA**

- ADOPTÁ TU PATO · $15.000  
- Participá desde cualquier lugar del país  
- CON $15.000 YA SOS PARTE DE LA CARRERA

**Lema**

- TU PATO CORRE POR VOS.  
- VOS CORRÉS POR ELLOS.

**EN VIVO**

- ESTA CARRERA LA HACEMOS ENTRE TODOS  
- $ XX.XXX.XXX recaudados  
- XXXX participaciones adoptadas  
- XX% DEL OBJETIVO  
- Cerca del countdown: “Las adopciones ya están abiertas.”

**Premio**

- EL PREMIO CRECE CON LA CARRERA  
- El 2% de lo recaudado por las participaciones será destinado a premios.

**Sponsors**

- MARCAS QUE HACEN POSIBLE LA CARRERA  
- LAS MARCAS TAMBIÉN CORREN POR UNA CAUSA  
- CTA: CONOCÉ LAS ALIANZAS

**Impacto**

- ARGENTINA CORRE JUNTA  
- Miles de personas. Miles de patos. Una misma causa.

**CTA final**

- SUMATE. Tu pato puede ganar una carrera. Tu participación puede ayudar a mucho más.  
- ADOPTÁ TU PATO

**Organiza**

- Evento producido por PATO RACE SOLIDARIO S.R.L.  
- Contacto: patorace.solidario@gmail.com

---

## Flujo de trabajo

1. Elegir una fase.  
2. Implementar solo esa fase.  
3. Deploy / preview.  
4. Rocío mira.  
5. Ajustar o pasar a la siguiente.  
6. Si manda texto nuevo → actualizar **este MD** primero.

---

## Apéndice — Mensaje original (ordenado, no literal WhatsApp)

### Datos duros

- 12 USD el pato (internacional).  
- Porcentajes nuevos: 60% Garrahan, 5% Hospital de Niños Blanco Villegas Tandil, 5% Fundación Carlos Gardel, 2% premios.  
- Evento: Buenos Aires, 22 noviembre 2026, Dique 3 · Puerto Madero.  
- Cuando cierren horarios: apertura 19:00 · carrera + experiencia en vivo.  
- CTA: Adoptá tu pato · $15.000 · Participá desde cualquier lugar del país.

### Hero / expectativa

- “Faltan 85 días” genera expectativa pero poca urgencia comercial → sumar “Las adopciones ya están abiertas” y, con venta, “X participaciones ya se sumaron”.  
- No poner meta en $ en EN VIVO.  
- No “patos adoptados” → “participaciones”.  
- En algún lado: Tu pato corre por vos / Vos corrés por ellos.

### Secciones

- Qué es / Adoptá tu pato (ver T&C) / Un pato · múltiples participaciones.  
- Premio crece con la carrera (2%).  
- Franja experiencia (música, DJ, etc.) — después.  
- Sponsors sin membresías.  
- 70% beneficio + beneficiarios + 2% premios + resto producción.  
- Argentina corre junta (no “meta ambiciosa”).  
- Cómo participar (4 pasos; sin destacar MP).  
- Estés donde estés, tu pato corre.  
- FAQ ampliada + 8 en home + Ver todas.  
- Antes del CTA final: Una carrera transparente (4 sellos).  
- CTA final + Organiza SRL + Dónde es (mapa / cómo llegar).

### UX / contenido

- Reducir 25–30% longitud; más tarjetas/íconos; menos párrafos; más foto/video.  
- Falta video (luego).  
- Mejorar lectura gris sobre azul.  
- Menú mobile + CTA sticky.  
- No repetir “evento solidario”; variar formulaciones.  
- Precio con contexto psicológico.  
- Compartir post-compra.  
- Footer legal + T&C (borrador largo de ella; completar después).  
- Merch (sección + productos; logística después).

---

## Próximo paso

Fases 0–7 armadas. Bases + T&C + cambios/devoluciones publicados. Precio **$10.000**, CUIT y 18+ cerrados. Checkbox de Bases obligatorio. Botón de arrepentimiento visible sin romper el header.

**Bloqueado por material / decisión de Rocío:** logos sponsors, Partner Deck, video teaser, fotos merch, mapa/cómo llegar, nombres de artistas, USD internacional vs ARS, fecha exacta de apertura de ventas (~20/09), horario definitivo de la fiesta, y si se promete “seguir en vivo”.

**Tienda (comercial):** opcional +ARS 90.000 según propuesta; no desarrollar hasta ok + 50% inicial. Andreani = ampliación aparte.
