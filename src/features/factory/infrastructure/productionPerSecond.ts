import type { Factory } from '@/src/features/factory/domain/factory.ts';

export function productionPerSecond(state: Factory): number {
  const { wire, feature, clipFactory, megaClipper, clipper, clipperBonus, megaClipperBonus } = state;
  const megaClipperPS = megaClipper * 500 * Math.max(1, megaClipperBonus);
  const clipperPS = clipper * Math.max(1, clipperBonus);
  const clipFactoryPS = Math.min(clipFactory * 1e3, 1e11);

  if (feature.clipFactory.enabled) {
    return wire >= clipFactory ? clipFactoryPS : 0;
  }

  const totalClipper = megaClipper + clipper;

  if (wire >= totalClipper) return megaClipperPS + clipperPS;
  if (wire >= megaClipper) return megaClipperPS;
  if (wire >= clipper) return clipperPS;

  return 0;
}
