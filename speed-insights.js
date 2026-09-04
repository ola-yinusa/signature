/**
 * Vercel Speed Insights Initialization
 * 
 * This file initializes Vercel Speed Insights for the static HTML site.
 * It uses the generic injectSpeedInsights function for non-framework projects.
 */

import { injectSpeedInsights } from '@vercel/speed-insights';

// Initialize Speed Insights
injectSpeedInsights();
