// Sound effects disabled per user request
class SoundSystem {
  public enabled: boolean = false;

  public playLaserBlip() {}
  public playTelemetryClick() {}
  public playBootHum() {}
}

export const soundFx = new SoundSystem();

