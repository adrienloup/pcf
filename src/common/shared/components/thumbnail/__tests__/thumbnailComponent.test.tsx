import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ThumbnailComponent } from '@/src/common/shared/components/thumbnail/thumbnailComponent.tsx';

vi.mock('@/src/common/shared/components/number/numberComponent.tsx', () => ({
  NumberComponent: ({ value }: { value: number }) => <span>{value}</span>,
}));

vi.mock('@/src/common/shared/components/thumbnail/thumbnail.module.scss', () => ({
  default: {
    thumbnail: 'thumbnail',
    info: 'info',
    success: 'success',
    warning: 'warning',
    error: 'error',
  },
}));

describe('ThumbnailComponent', () => {
  it('Devrait afficher le label', () => {
    render(<ThumbnailComponent label="Trombones" />);

    expect(screen.getByText('Trombones')).toBeInTheDocument();
  });

  it('Devrait afficher la valeur', () => {
    render(<ThumbnailComponent value={1000} />);

    expect(screen.getByText('1000')).toBeInTheDocument();
  });

  it('Devrait appliquer les classes de statut', () => {
    const statuses = ['info', 'success', 'warning', 'error'] as const;

    statuses.forEach((status) => {
      const { unmount } = render(
        <ThumbnailComponent
          label={status}
          status={status}
        />
      );

      expect(screen.getByText(status).closest('span')).toHaveClass(`thumbnail ${status}`);
      unmount();
    });
  });

  it('Devrait appliquer une classe personnalisée', () => {
    render(
      <ThumbnailComponent
        label="Trombones"
        className="custom-class"
      />
    );

    expect(screen.getByText('Trombones').closest('span')).toHaveClass('thumbnail info custom-class');
  });
});
