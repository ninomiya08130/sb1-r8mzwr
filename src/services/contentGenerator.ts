import { ContentIdea } from '../types';

const PLATFORMS = ['twitter', 'instagram', 'facebook', 'linkedin'] as const;

function generateUniqueId(): string {
  return Math.random().toString(36).substr(2, 9);
}

export function generateContentIdeas(keyword: string, targetPlatform?: typeof PLATFORMS[number]): ContentIdea[] {
  const platforms = targetPlatform ? [targetPlatform] : PLATFORMS;
  const ideas: ContentIdea[] = [];

  platforms.forEach(platform => {
    const idea = generateIdeaForPlatform(keyword, platform);
    if (idea) ideas.push(idea);
  });

  return ideas;
}

function generateIdeaForPlatform(keyword: string, platform: typeof PLATFORMS[number]): ContentIdea {
  const templates = {
    twitter: {
      title: `${keyword}に関するツイートスレッド`,
      description: `${keyword}についての重要なポイントを5つのツイートで解説します。ハッシュタグを効果的に活用し、エンゲージメントを高めます。`,
      category: 'インフォメーション'
    },
    instagram: {
      title: `${keyword}のビジュアルストーリー`,
      description: `${keyword}に関する魅力的な写真やグラフィックを使用し、視覚的なストーリーテリングを展開します。`,
      category: 'ビジュアル'
    },
    facebook: {
      title: `${keyword}の詳細解説`,
      description: `${keyword}について、詳しい背景や関連情報を交えながら、読者に価値のある情報を提供します。`,
      category: '解説'
    },
    linkedin: {
      title: `${keyword}のビジネス分析`,
      description: `${keyword}がビジネスに与える影響や、専門家の視点からの分析をシェアします。`,
      category: 'ビジネス'
    }
  };

  return {
    id: generateUniqueId(),
    ...templates[platform],
    platform
  };
}