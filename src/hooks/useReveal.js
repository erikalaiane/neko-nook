import { useEffect, useRef } from 'react'

/**
 * Hook que adiciona a classe 'visible' ao elemento quando ele entra na viewport.
 * Use junto com a classe CSS 'reveal' para animações de scroll.
 * @param {number} delay - atraso em ms antes de adicionar 'visible'
 */
export function useReveal(delay = 0) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add('visible'), delay)
          observer.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return ref
}
