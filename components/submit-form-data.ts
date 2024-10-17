'use client'

export async function submitFormData(data: any) {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Log the data to console (in a real app, this would be sent to a server)
  console.log('Submitted form data:', data);

  // Simulate successful submission
  return { success: true };
}