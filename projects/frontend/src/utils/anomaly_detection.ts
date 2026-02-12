import { AttendanceRecord } from '../interfaces/session';

interface AnomalyResult {
  isAnomalous: boolean;
  riskScore: number;
  reason?: string;
}

/**
 * analyzes attendance records to detect potentially fraudulent activity
 * e.g., scanning from multiple locations instantly (impossible travel)
 * or scanning the same nonce repeatedly.
 */
export const detectAnomaly = (records: AttendanceRecord[], newRecord: AttendanceRecord): AnomalyResult => {
  // Stub implementation
  // In a real system, we'd check timestamps, IP addresses (if available), etc.

  // Example rule: Check if student has marked attendance excessively fast
  const recentRecords = records.filter(r => r.student === newRecord.student && r.timestamp > Date.now() - 60000);

  if (recentRecords.length > 5) {
    return {
      isAnomalous: true,
      riskScore: 0.9,
      reason: 'High frequency scanning detected'
    };
  }

  return {
    isAnomalous: false,
    riskScore: 0.1
  };
};
