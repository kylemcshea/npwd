export enum EmergencyEvents {
  PLAY_AUDIO = 'npwd:playDispatchAudioStart',
  DISPATCH = 'npwd:dispatchEmergencyService',
  ANIMATION = 'npwd:callAnimationEmergency',
}
export enum EmergencyServices {
  POLICE = 'police',
  AMBULANCE = 'ambulance',
}

export enum AudioTypes {
  START_CALL = 'startCall',
  DISPATCH_POLICE = 'dispatchPolice',
  DISPATCH_AMBULANCE = 'Dispatch_ambulance',
  END_CALL = 'endCall',
}

export interface AudioEventArguments {
  type: AudioTypes;
}

export interface DispatchModel {
  message: string;
  job: EmergencyServices;
}

export interface AnimationModel {
  isCalling: bool;
}
